import { Component } from '@angular/core';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-charts',
  standalone: true,
  imports: [ChartjsComponent],
  templateUrl: './pie-charts.component.html',
  styleUrl: './pie-charts.component.css'
})
export class PieChartsComponent {

  dataProdutos = {
    labels: ['Transferência Internacional', 'Importação', 'Exportação', 'Moeda em Espécie'],
    datasets: [{
      backgroundColor: ['#00D8FF', '#E46651', '#d9f827', '#41B883'],
      data: [40, 20, 80, 10],
      hoverOffset: 4
    }]
  };

  dataTransferenciaInternacional = {
    labels: ['Compra', 'Venda'],
    datasets: [{
      backgroundColor: ['#00D8FF', '#00accc'],
      data: [40, 20],
      hoverOffset: 4
    }]
  }

  dataImportacao = {
    labels: ['Compra', 'Venda'],
    datasets: [{
      backgroundColor: ['#e46651', '#b65140'],
      data: [40, 20],
      hoverOffset: 4
    }]
  }

  dataExportacao = {
    labels: ['Compra', 'Venda'],
    datasets: [{
      backgroundColor: ['#d9f827', '#adc61f'],
      data: [40, 20],
      hoverOffset: 4
    }]
  }

  dataMoedaEmEspecie = {
    labels: ['Compra', 'Venda'],
    datasets: [{
      backgroundColor: ['#41B883', '#349368'],
      data: [40, 20],
      hoverOffset: 4
    }]
  }

  options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 10,
          padding: 10,
        }
      }
    }
  };

}
