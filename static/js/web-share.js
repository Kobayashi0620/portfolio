const shareData = {
    title: "こばやし -Kobayashi- | Portfolio",
    text: "Web制作、システム開発、自動化など、Webに関する幅広いサービスを提供しております。お客様のご要望を丁寧にヒアリングし、最適なソリューションをご提案いたします。",
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