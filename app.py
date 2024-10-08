from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'k.kobayashi6252@gmail.com'
app.config['MAIL_PASSWORD'] = 'lhmt knxe zaxw jphy'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_DEFAULT_SENDER'] = 'k.kobayashi6252@gmail.com'
mail = Mail(app)

"""
*index_pageに遷移するプログラム
*引数なし
"""
@app.route('/')
@app.route('/index', methods=['GET', 'POST'])
def index_page():
    success = None
    if request.method == "POST":
        success = contact_form()
    return render_template('index.html', success=success)

"""
*フォームからの情報をもとにメール送信
*引数なし
"""
def contact_form():
        name = request.form.get('name')
        email = request.form.get('email')
        content = request.form.get('content')
        agree = request.form.get('agree')

        msg = Message(
            f'【{name} 様】お問い合わせportfolio',
            recipients=['kobayashi.pgworks+Portfolio@gmail.com'],
            body=f'''
            氏名：{name} 様
            メール：{email}
            問い合わせ内容：{content}
            ※プライバシーポリシー：{agree}
            '''
        )

        try:
            mail.send(msg)
            return True
        except Exception:
            return False

"""
*works_pageに遷移するプログラム
*引数なし
"""
@app.route('/works')
def works_page():
    return render_template('works.html')

"""
*deliverables_pageに遷移するプログラム
*引数なし
"""
@app.route('/works/<deliverables>')
def deliverables_page(deliverables):
    return render_template(f'{deliverables}.html')

"""
*page_not_foundに遷移するプログラム
*存在しないページに遷移しようとした際にエラーを表示する
*引数（404エラー）
"""
@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404