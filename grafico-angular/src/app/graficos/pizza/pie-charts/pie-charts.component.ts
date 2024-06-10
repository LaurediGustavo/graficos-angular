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

  dataLineChart = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        label: 'Transferência Internacional',
        backgroundColor: '#00D8FF',
        borderColor: '#00D8FF',
        pointBackgroundColor: '#00D8FF',
        pointBorderColor: '#00D8FF',
        data: [40, 20, 12, 39, 10, 20, 0, 0 ,0 ,0 ,0 ,0]
      },
      {
        label: 'Importação',
        backgroundColor: '#E46651',
        borderColor: '#E46651',
        pointBackgroundColor: '#E46651',
        pointBorderColor: '#E46651',
        data: [50, 12, 28, 29, 7, 25, 0, 0 ,0 ,0 ,0 ,0]
      },
      {
        label: 'Exportação',
        backgroundColor: '#d9f827',
        borderColor: '#d9f827',
        pointBackgroundColor: '#d9f827',
        pointBorderColor: '#d9f827',
        data: [2, 3, 6, 9, 7, 5, 0, 0 ,0 ,0 ,0 ,0]
      },
      {
        label: 'Moeda em Espécie',
        backgroundColor: '#41B883',
        borderColor: '#41B883',
        pointBackgroundColor: '#41B883',
        pointBorderColor: '#41B883',
        data: [23, 3, 0, 4, 34, 3, 0, 0 ,0 ,0 ,0 ,0]
      }
    ]
  };

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

}
