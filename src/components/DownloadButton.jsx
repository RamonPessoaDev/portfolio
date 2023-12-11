const DownloadButton = () => {
    const downloadCV = () => {
        const curriculoPath = "RamonPessoaDevCV.pdf";

        const link = document.createElement("a");
        link.href = curriculoPath;
        link.download = "RamonPessoaDevCV.pdf";
        link.click();
    };

    return (
        <div>
            <button onClick={downloadCV}>Baixar CV</button>
        </div>
    );
};

export default DownloadButton;