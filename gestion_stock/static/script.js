
  $(function () {
    var data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(0,0,0,.15)",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#4CAF50",
      }, {
        label: "My Second dataset",
        fillColor: "rgba(255,255,255,.25)",
        strokeColor: "rgba(255,255,255,.75)",
        pointColor: "#fff",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(0,0,0,.15)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }]
    };


    var dataPie = [{
      value: 300,
      color: "#4caf50",
      highlight: "#66bb6a",
      label: "Google Chrome"
    }, {
      value: 50,
      color: "#03a9f4",
      highlight: "#29b6f6",
      label: "Edge"
    }, {
      value: 100,
      color: "#d32f2f",
      highlight: "#e53935",
      label: "Firefox"
    }]

    var option = {
      responsive: true,
      // set font color
      scaleFontColor: "#fff",
      // font family
      defaultFontFamily: "'Roboto', sans-serif",
      // background grid lines color
      scaleGridLineColor: "rgba(255,255,255,.1)",
      // hide vertical lines
      scaleShowVerticalLines: false,
    };

    // // Get the context of the canvas element we want to select
    // var ctx = document.getElementById("sales").getContext('2d');
    // var myLineChart = new Chart(ctx).Line(data, option); //'Line' defines type of the chart.

    // // Get the context of the canvas element we want to select
    // var ctx = document.getElementById("conversion").getContext('2d');
    // var myRadarChart = new Chart(ctx).Radar(data, option);

    // Get the context of the canvas element we want to select

    //bar
    var ctxB = document.getElementById("traffic").getContext('2d');
    var myBarChart = new Chart(ctxB, {
      type: 'bar',
      data: {
        labels: ["January", "Febuary", "March", "April", "May", "June"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 255, 255, 0.3)',
            'rgba(255, 255, 255, 0.3)',
            'rgba(255, 255, 255, 0.3)',
            'rgba(255, 255, 255, 0.3)',
            'rgba(255, 255, 255, 0.3)',
            'rgba(255, 255, 255, 0.3)'
          ],
          borderColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          labels: {
            fontColor: "white"
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: "white"
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "white"
            }
          }]
        }
      }
    });

    //pie
    var ctxP = document.getElementById("doughnutChart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
      type: 'doughnut',
      data: {
        labels: ["March", "April", "May", "June"],
        datasets: [{
          data: [160, 50, 80, 60],
          backgroundColor: ["#4285F4", "#ffbb33", "#29b6f6", "#FF5252"],
          hoverBackgroundColor: ["#6ea0f2", "#fec451", "#52c3f6", "#fa6e6e"]
        }]
      },
      options: {
        responsive: true
      }
    });

  });



  // SideNav Initialization
  $(".button-collapse").sideNav();

  var container = document.querySelector('.custom-scrollbar');
  var ps = new PerfectScrollbar(container, {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
  });

  // Data Picker Initialization
  $('.datepicker').pickadate();

  // Material Select Initialization
  $(document).ready(function () {
    $('.mdb-select').material_select();
  });

  // Tooltips Initialization
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



  $(function () {
    $('.min-chart#chart-sales').easyPieChart({
      barColor: "#4caf50",
      onStep: function (from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
  });

  $(function () {
    $('#dark-mode').on('click', function (e) {

      e.preventDefault();

      $('footer, .card').toggleClass('dark-card-admin');
      $('body, .navbar').toggleClass('white-skin navy-blue-skin');
      $(this).toggleClass('white text-dark btn-outline-black');
      $('body').toggleClass('dark-bg-admin');
      $('h6, .card, p, td, th, i, li a, h4, input, label').not(
        '#slide-out i, #slide-out a, .dropdown-item i, .dropdown-item').toggleClass('text-white');
      $('.btn-dash').toggleClass('grey blue').toggleClass('lighten-3 darken-3');
      $('.gradient-card-header').toggleClass('white black lighten-4');
      $('.list-panel a').toggleClass('navy-blue-bg-a text-white').toggleClass('list-group-border');

    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const video = document.getElementById('video');
    document.getElementById('canvas').style.display="none";
    document.getElementById('video').style.display="none";
    document.getElementById('snap').style.display="none";
  
    const context = canvas.getContext('2d'); 
    const snapButton = document.getElementById("snap");
    const cameraButton = document.getElementById("camera");
  
    function startCamera() {
      navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(stream => {
          video.srcObject = stream;
        })
        .catch(error => {
          alert(error)
        });
    }

    function takeSnapshot() {
      document.getElementById('camera').style.display = 'block';
      snapButton.style.display = 'none';
      video.style.display = 'none';
      canvas.style.display = 'block';
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      video.srcObject.getTracks().forEach(track => track.stop());
    
     canvas.toBlob(function(blob) {
         const scanner = new jscanify();
          let orig = new Image();
          orig.src = URL.createObjectURL(blob);
          clearData();

          result.style.display = "block";
          orig.onload = function () {
            const highlightedCanvas = scanner.highlightPaper(orig);
            highlighted.appendChild(highlightedCanvas);
  
            const extractedCanvas = scanner.extractPaper(orig, 772, 1000);
            extracted.appendChild(extractedCanvas);
  
            const contour = scanner.findPaperContour(cv.imread(orig));
            const cornerPoints = scanner.getCornerPoints(contour);
            cornerPts.querySelector("pre").textContent = JSON.stringify(
              cornerPoints,
              null,
              4
            );
          };
          document.body.appendChild(orig);
      }, 'image/png'); 
      

  }
  
  
    // function takeSnapshot() {
    //   document.getElementById('camera').style.display = 'block';
    //   snapButton.style.display = 'none';
    //   video.style.display = 'none';
    //   canvas.style.display = 'block';
    //   context.drawImage(video, 0, 0, canvas.width, canvas.height);
    //   video.srcObject.getTracks().forEach(track => track.stop());
    //   let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    //   let image = new Image();
    //   image.src = canvas.toDataURL(); 
      
   

      
    //   document.body.appendChild(image);  
    // }
  
    snapButton.addEventListener("click", takeSnapshot);
    cameraButton.addEventListener("click", () => {
      document.getElementById('camera').style.display = 'none';
      snapButton.style.display = 'block';
      video.style.display = 'block';
      canvas.style.display = 'none';
      startCamera();
    });
  });


  document.addEventListener("DOMContentLoaded",  () => {
    const scanner = new jscanify();
    const fileInput=document.getElementById('fileInput');
    fileInput.addEventListener("change", function (e) {
      if (e.target.files.length) {
        const image = e.target.files[0];
        orig.src = URL.createObjectURL(image);
        clearData();
        result.style.display = "block";
        orig.onload = function () {
          const highlightedCanvas = scanner.highlightPaper(orig);
          highlighted.appendChild(highlightedCanvas);

          const extractedCanvas = scanner.extractPaper(orig, 772, 1000);
          extracted.appendChild(extractedCanvas);

          const contour = scanner.findPaperContour(cv.imread(orig));
          const cornerPoints = scanner.getCornerPoints(contour);
          cornerPts.querySelector("pre").textContent = JSON.stringify(
            cornerPoints,
            null,
            4
          );
        };
      }
    });
  });

  function clearData() {
    highlighted.querySelector("canvas")?.remove();
    extracted.querySelector("canvas")?.remove();
    cornerPts.querySelector("pre").textContent = "";
  }
  
