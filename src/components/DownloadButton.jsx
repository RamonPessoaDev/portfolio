const DownloadButton = () => {
    const downloadCV = () => {
        const fileUrl = "https://raw.githubusercontent.com/RamonPessoaDev/CV/main/RamonPessoaDevCV.pdf";

        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "RamonPessoaDevCV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <button onClick={downloadCV}>Download CV</button>
        </div>
    );
};

export default DownloadButton;