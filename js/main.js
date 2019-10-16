

var objects = getObjects()
renderCards()
renderModals()
function renderCards() {
    var strHTML = ``;
    strHTML += `<div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">My projects</h2>
          <h3 class="section-subheading text-muted">let's play!</h3>
        </div>
      </div>
      <div class="row">`
    for (var i = 0; i < objects.length; i++) {


        strHTML += ` <div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#${objects[i].id}">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="${objects[i].img}" alt="">
      </a>
      <div class="portfolio-caption">
        <h4>${objects[i].name}</h4>
        <p class="text-muted">games</p>
      </div>
    </div>`
    }




    strHTML += `</div>`
    strHTML += ` </div>`
    document.querySelector('#portfolio').innerHTML = strHTML

}
function renderModals() {
    for (var i = 0; i < objects.length; i++) {
        var strHTML = `<div class="portfolio-modal modal fade" id="${objects[i].id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
            <div class="lr">
                <div class="rl"></div>
            </div>
            </div>
            <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>Pac-man</h2>
                    <p class="item-intro text-muted">run away from the ghosts and take all the coins</p>
                    <a href="${objects[i].link}"><img class="img-fluid d-block mx-auto" src="${objects[i].img}" alt=""></a>
                    <p>run away from the ghosts and take all the coins </p>
                    <ul class="list-inline">
                    <li>Date: september 2019</li>
                    <li>Category:games</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>`
    }
    document.querySelector('.modals').innerHTML = strHTML;
}