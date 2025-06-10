import React, { useEffect, useRef } from 'react';

const ReportViewer = () => {

    useEffect(() => {
        // Verifica se o Stimulsoft está carregado
        if (typeof Stimulsoft === 'undefined') {
            console.error('Stimulsoft não foi carregado corretamente.');
            return;
        }
        
        // Cria o relatório e o visualizador
        const report = Stimulsoft.Report.StiReport.createNewReport();
        report.loadFile("../../reports/First-Report.mrt");

        const options = new Stimulsoft.Viewer.StiViewerOptions();
        const viewer = new Stimulsoft.Viewer.StiViewer(options, "StiViewer", false);
        viewer.report = report;

        // Renderiza o visualizador no DOM
        viewer.renderHtml("viewerContent");

        // Limpeza ao desmontar o componente
        return () => {
            const viewerContent = document.getElementById("viewerContent");
            if (viewerContent) {
                viewerContent.innerHTML = ""; // Limpa o conteúdo do viewer
            }
        };
    }, []);

    return <div id="viewerContent"></div>;
};

export default ReportViewer;