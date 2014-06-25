var TranviasApp = function() {
};
TranviasApp.prototype = {
  paradas: null,
  loading: null,
  errors : null,

  init: function() {
    this.paradas = $('#paradas');
    this.loading = $('#progress');
    this.errores = $('#errores');
  },

  elementoParada: function(datosParada) {
    var html = '<div class="parada">' +
      '<h2>' + datosParada.title + '<h2>' +
      '<ul>';
    for(var x = 0; x <= datosParada.destinos.length; x++) {
      var destino = datosParada.destinos[x];
      if(!destino) {
        continue
      }
      html += '<li>' +
        '<div class="linea">' + destino.linea + '</div>' +
        '<div class="destino">' + destino.destino + '</div>' +
        '<div class="minutos">' + destino.minutos + ' minutos</div>' +
        '</li>';
    }

    html += '</ul></div>';

    return html;
  },

  mostrarError: function(error) {
    this.paradas.hide();
    this.loading.hide();

    this.errores.html(error);
    this.errores.show();
  },

  mostrarParadas: function(paradasData) {
    this.paradas.html('');
    this.paradas.show();

    var self = this;
    jQuery.each(paradasData, function(index, poi) {
      self.paradas.append(self.elementoParada(poi));
    });
  },

  programarRecarga: function() {
    setInterval(function() {
      this.cargarParadas(query);
    }, 30000);
  },

  onParadasOk: function(data) {
    if(data.totalCount) {
      this.mostrarParadas(data['result']);
      this.programarRecarga();
    } else {
      this.mostrarError('no se han encontrado paradas');
    }

    this.loading.hide();
  },

  onParadasError: function(error) {
    this.mostrarError(error);
  },

  cargarParadas: function() {
    var query = encodeURIComponent($('#query').val());
    if(query == '') {
      return
    }

    this.loading.show();
    this.errores.hide();

    var self = this;
    $.ajax({
      url     : 'http://www.zaragoza.es/api/recurso/urbanismo-infraestructuras/tranvia?start=0&rows=100&query=title%3D%22*' + query + '*%22&distance=500',
      dataType: 'json',
      success : function(data) {
        self.onParadasOk(data);
      },
      error   : function(error) {
        self.onParadasError
      }
    });
  }
};
