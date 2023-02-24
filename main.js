//EXAMPLES

//XMLHttpRequest()
function extraerDatos(){
    //let url=`https://newsapi.org/v2/everything?q=apple&from=2023-02-05&to=2023-02-05&sortBy=popularity&apiKey=API_KEY`;
    let url='https://mindicador.cl/api/dolar';
    const api=new XMLHttpRequest();
    api.open('GET',url,true);
    api.send();

    api.onreadystatechange = function(){

        if (this.status==200 && this.readyState == 4){

            let datos=JSON.parse(this.responseText);
            console.log(datos.serie);
            let resultado=document.querySelector('#resultado');
            resultado.innerHTML="";

            for (let item of datos.serie){
                console.log(item.fecha.substr(0,10));
                resultado.innerHTML += `<li>${item.fecha.substr(0,10)} | ${item.valor}</li>`;
            }

        }
    }

}

//Async-Await function

async function getText(num) {
    let url = "https://api.nasa.gov/planetary/apod?api_key=mQJrya4vEXy0i8LAhtxOKQyteAfs4XWF5xdx74as";

    let json = await fetch(url);
    //let resultado= await json.text();
    let resultado = await json.json();
    console.log(resultado);

    let nuevoParrafo = document.createElement('img');
    nuevoParrafo.src = resultado.url;

    divs[num].append(nuevoParrafo);
}

//JQuery database
<script>		
		$(document).on("ready", function(){
			listar();
		});

		var listar= () => {
			var table = $("#dt_cliente").DataTable({
				"ajax":{
					"method":"POST",
					"url":"listar.php"

				},
				"columns":[
					{"data":"codigo"},
					{"data":"descripcion"},
					{"data":"precio"}
			]
		})
		}
		
		

	</script>

    
// fetch 
    const options = {
        method: 'POST'
    }

    fetch ('mydatabase.php',options)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })


