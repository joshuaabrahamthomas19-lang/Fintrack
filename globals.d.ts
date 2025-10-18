// This file provides TypeScript definitions for the global variables
// introduced by the libraries loaded via CDN in index.html.

// For Chart.js
declare var Chart: any;

// For html2canvas
declare var html2canvas: any;

// For jspdf and its autotable plugin
declare namespace jspdf {
    class jsPDF {
        constructor(options?: any);
        save(filename: string): void;
        autoTable(options: any): this; // this refers to jsPDF instance
        addImage(imageData: string, format: string, x: number, y: number, width: number, height: number): this;
        text(text: string | string[], x: number, y: number, options?: any): this;
        setFontSize(size: number): this;
        // Add other jsPDF methods you use here...
    }
}