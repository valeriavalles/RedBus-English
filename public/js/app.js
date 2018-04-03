(function() {

            // codigo para los enlaces
            var bancaInternet = $('.banca-internet');
            var pagoEfectivo = $('.pago-efectivo');
            var containerBancaInternet = $('#banca_internet');
            var containerPagoEfectivo = $('#pago_efectivo');
        
            
            bancaInternet.on('click', function() {
                containerBancaInternet.show();
                containerPagoEfectivo.hide();
            });
        
            pagoEfectivo.on('click', function() {
                containerPagoEfectivo.show();
                containerBancaInternet.hide();
            });
  
  // SLIDER 
$('#slider-cont').slick({

  // normal options...
  infinite: false,
  
  // the magic
  responsive: [{
  
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      infinite: true
    }
  
  }, {
  
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      // dots: true
    }
  
  }, {
  
    breakpoint: 300,
    // settings: "unslick" // destroys slick
  
  }]
});

  var data = [
    {
      name: 'bcp',
      pay: 'Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > SOLES'
            
    },
    {
      name: 'bbva',
      pay: 'Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES'
            
    },
    {
      name: 'interbank',
      pay: 'Selecciona la opción Pago a Instituciones o Empresa > Empresas: PAGOEFECTIVO > Servicos: PAGOEFECTIVO'
            
    },
    {
      name: 'scotiabank',
      pay: 'Selecciona la opción Pagos > Otras Instituciones > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES'
            
    },
    {
      name: 'banbif',
      pay: 'Selecciona la opción Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO'
            
    },
  ];

    
  var card = document.getElementsByClassName('card');


  for (var i = 0;i < card.length;i++) {
    // console.log(card.length);
    card[i].addEventListener('click', function() {
      for (var j = 0;j < data.length;j++) {
        // console.log(data[j].pay);
        if (this.getAttribute('alt') === data[j].name) {
          console.log(data[j].pay);
          var node = document.createTextNode(data[j].pay);

          document.getElementById('pay-method').innerHTML = '';
          document.getElementById('pay-method').appendChild(node);
        }
      }
    });
  }

})();
