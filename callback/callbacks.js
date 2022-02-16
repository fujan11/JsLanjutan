// // latihan CALLBACK
$('.search-button').on('click', function(){

    $.ajax({
        url: "http://www.omdbapi.com/?apikey=dca61bcc&s=" + $('.form-control').val(),
        success: results => {
            const movies = results.Search;
            let card = '';
            movies.forEach(mv => {
                card += showcard(mv);
    
            });
            $('.movie-container').html(card);
    
            // ketika tombol di klik
            
            $('.details-button').on('click', function () {
                
                $.ajax({
                    url: "http://www.omdbapi.com/?apikey=dca61bcc&i=" + $(this).data('imdb'),
                    success: m=> {
                        const mdetails = showDMV(m);
    
                     $('.modal-body').html(mdetails);
                    },
                    error: (e)=>{
                        console.log(e.responseText);
                    }
                });
            })
            
        },
        error: (e)=>{
            console.log(e.responseText);
        }
    });

});






// fn SHOW CARD

function showcard(mv) {
    return ` 
    <div class="col-md-4 my-5">
        <div class="card" >
            <img src="${mv.Poster}" class="card-img-top" >
            <div class="card-body">
            <h5 class="card-title">${mv.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${mv.Year}</h6>
            <a href="#" class="btn btn-primary details-button" data-toggle="modal" data-target="#showDetail" 
            data-imdb="${mv.imdbID}">show details</a>
            </div>
        </div>
    </div>`
}

// fn show details
function showDMV(m) {
    return`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md3">
                                <img src="${m.Poster}"  class="img-fluid">
                            </div>
                            <div class="col-md">
                            <ul class="list-group">
                                <li class="list-group-item">${m.Title} ${m.Year}</li>
                                <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                                <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                                <li class="list-group-item"><strong>Writter :</strong>${m.Writer}</li>
                                <li class="list-group-item"><strong>Plot</strong><br> ${m.Plot}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
}
