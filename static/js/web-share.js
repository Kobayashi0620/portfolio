const shareData = {
    title: "菅叶和 -KanKan- | FAN SITE",
    text: "※ファンサイトです。\n俳協 所属タレント · 菅 叶和（かん かんな）/Kanna Kanの最新情報をお届けするファンサイトです。",
    url: "", //TODOリンク可変
};

const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    try {
        await navigator.share(shareData);
    } catch (err) {
        alert(`共有に失敗しました: ${err.message}`)
    }
});