var TranviasApp = function () {
};
TranviasApp.prototype = {
  paradas: null,
  loading: null,

  init: function () {
    this.paradas = $('#paradas');
    this.loading = $('#progress');
  },

  elementoParada: function (datosParada) {
    var html = '' +
      '<div class="parada row panel callout radius">' +
      '<h5>' + datosParada.title + '</h5>';

    console.log(datosParada);

    if (datosParada.destinos) {
      for (var x = 0; x <= datosParada.destinos.length; x++) {
        var destino = datosParada.destinos[x];
        if (!destino) {
          continue
        }
        html += '<div class="row tranvia">' +
          '<div class="linea large-1 small-2 columns">' + destino.linea + '</div>' +
          '<div class="destino large-7 small-10 columns">' + destino.destino + '</div>' +
          '<div class="minutos large-4 small-12 columns">' + destino.minutos + ' minutos</div>' +
          '</div>';
      }
    }

    html += '</div>';

    return html;
  },

  mostrarError: function (error) {
    this.paradas.hide();
    this.loading.hide();

    var errorHtml = '<div data-alert class="alert-box alert round ">' +
      '<h4>' + error + '</h4>' +
      '<a href="#" class="close">&times;</a></div>';

    $('body').append(errorHtml).foundation();
  },

  mostrarParadas: function (paradasData) {
    this.paradas.html('');
    this.paradas.show();

    var self = this;
    jQuery.each(paradasData, function (index, poi) {
      self.paradas.append(self.elementoParada(poi));
    });
  },

  programarRecarga: function () {
    var self = this;
    setInterval(function () {
      self.cargarParadas();
    }, 30000);
  },

  onParadasOk: function (data) {
    if (data.totalCount) {
      this.mostrarParadas(data['result']);
      this.programarRecarga();
    } else {
      this.mostrarError('no se han encontrado paradas');
    }

    this.loading.hide();
  },

  onParadasError: function (error) {
    this.mostrarError(error);
  },

  cargarParadas: function () {
    var query = encodeURIComponent($('#query').val());
    if (query == '') {
      return
    }

    this.loading.show();

    var self = this;
    $.ajax({
      url: 'http://www.zaragoza.es/api/recurso/urbanismo-infraestructuras/tranvia?start=0&rows=100&query=title%3D%22*' + query + '*%22&distance=500',
      dataType: 'json',
      success: function (data) {
        self.onParadasOk(data);
      },
      error: function (error) {
        self.onParadasError
      }
    });
  }
};
