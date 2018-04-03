$(document).ready(function() {
  // imprimir pagina
  let imp = $('#imprimir');
  $('#imprimir').on('click', function() {
    if (window.print !== null) { 
      window.print(); 
    } else { 
      alert('No tienes habilitada esta opción en el naveador.'); 
    } 
  });
  

  // SLIDER 
  $('#slider').slick({

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
 

  const dataLogo = [
    {
      url: 'https://btpucp.pucp.edu.pe/wp-content/uploads/2012/07/logo-oficial-412x120.png',
      banco: 'bcp'
    },
    {
      url: 'https://eisaf.es/wp-content/uploads/2018/03/bbva_foro-500x150.png',
      banco: 'bbva'
    },
    {
      url: 'https://btpucp.pucp.edu.pe/wp-content/uploads/2012/07/logo-oficial-412x120.png',
      banco: 'bcp'
    },
    {
      url: 'https://eisaf.es/wp-content/uploads/2018/03/bbva_foro-500x150.png',
      banco: 'bbva'
    }
  ];
  const datos = `
  <div class="item sli-item" >
      <img src=${dataLogo[0].url}  />
      <p>${dataLogo[0].banco}</p>
  </div>
`;

  function imagenes(dataLogo) {
    const contPadre = $('.slider');
    contPadre.append(datos);
  }
  imagenes();
  console.log(dataLogo);
  /* et show = dataLogo[0].url;
console.log(show);*/

  // funcionalidad para mostrar informacion de pago
  const dataEfectivo = [
    {
        name:'bcp',
        premisa1:'(*) Agentes BCP Brinda el código de empresa 02186',
        premisa2:'(*) Agencias BCP Costo adicional: S/.1.00.'
    },
    {
        name:'interbank',
        premisa1:'(*) Agentes Interbank Brinda el siguiente código 273001',
        premisa2:'(*) Agencias Market de Interbank Costo adicional: S/.2.00.'
    },
    {
      name:'full carga',
      premisa1:'(*) Encuenta a FullCarga en Bodegas, Farmacias, cabinas de Internet y Locutorios.',
      premisa2:''
    }, 
    {
      name:'bbva',
      premisa1:'',
      premisa2:''
    }, 
    {
      name:'banbif',
      premisa1:'',
      premisa2:''
    },
    {
      name:'scotiabank',
      premisa1:'',
      premisa2:''
    },
    {
      name:'wester union',
      premisa1:'',
      premisa2:''
    },
    {
      name:'kasnet',
      premisa1:'',
      premisa2:''
    }      
  ]

  var cardEfectivo = document.getElementsByClassName('card-efectivo');

  // var payContainer = document.getElementsByClassName('pay-method');

  for (var i = 0;i < cardEfectivo.length;i++) {
    // console.log(card.length);
    cardEfectivo[i].addEventListener('click', function() {
        
        for( var j = 0;j<dataEfectivo.length;j++) {
            //console.log(data[j].pay);
            if(this.getAttribute('alt') === dataEfectivo[j].name){
                console.log(dataEfectivo[j].pay);
                var element1 = document.createElement('p');
                var element2 = document.createElement( 'p');
                var node1 = document.createTextNode(dataEfectivo[j].premisa1);
                var node2 = document.createTextNode(dataEfectivo[j].premisa2);

          element1.appendChild(node1);
          element2.appendChild(node2);
                    
          document.getElementById('cont-datos').innerHTML = '';
          document.getElementById('cont-datos').appendChild(element1);
          document.getElementById('cont-datos').appendChild(element2);
        }
      }
    });
  }
});
