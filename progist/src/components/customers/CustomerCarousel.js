import React from 'react';

const CustomerCarousel = () => {
    return(
        <div>
            <div className="section">
                <div className="card card-raised card-carousel">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval={3000}>
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL3Jlc291cmNlcy9WZWN0b3ItV29ybGQtTWFwLS1VUy1TdGF0ZXMtUHJldmlldy0xLmpwZw&q=90&enlarge=true&h=1036&w=1600" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="container">
                                        <div className="media">
                                            <img className="align-self-center mr-3" src=".../64x64" alt="Generic placeholder image" />
                                            <div className="media-body">
                                                <h5 className="mt-0">Center-aligned media</h5>
                                                <p class="text-primary">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                <p class="text-primary">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://latintrad.com/wp-content/uploads/2018/11/Foto_Agencia.jpg" alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                            <h1 className="title">Your Story Starts With Us.</h1>
                                            <h4><p class="text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A molestiae, dignissimos possimus ad totam facilis 
                                                ipsam quo? Pariatur cupiditate labore vero laudantium magnam, illum ratione fugit eveniet? Accusamus, cupiditate 
                                                voluptate?</p> </h4>        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL3Jlc291cmNlcy9WZWN0b3ItV29ybGQtTWFwLS1VUy1TdGF0ZXMtUHJldmlldy0xLmpwZw&q=90&enlarge=true&h=1036&w=1600" alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                            <h1 className="title">Your Story Starts With Us.</h1>
                                            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A molestiae, dignissimos possimus ad totam facilis 
                                                ipsam quo? Pariatur cupiditate labore vero laudantium magnam, illum ratione fugit eveniet? Accusamus, cupiditate 
                                                voluptate?</h4>        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <i className="material-icons">keyboard_arrow_left</i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <i className="material-icons">keyboard_arrow_right</i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerCarousel;