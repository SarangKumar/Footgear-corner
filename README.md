<!--# Footgear-corner-->
<!--This is a website with which we can preview the shoe models is 3d for better user experience-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Footgear Kzorner</title>

    <!-- javascript -->
    <script src="./asset/javascript/jquery-3.6.0.min.js"></script>
    <script src="./asset/javascript/jQuery_home.js"></script>
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

    <!-- css -->
    <link rel="stylesheet" href="./asset/styles/styles_home.css">

    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,400;1,500&family=Merriweather+Sans:wght@300&family=Montserrat+Alternates:wght@100&family=Montserrat:wght@100;300;800&family=Poppins:ital,wght@0,100;1,600&family=Roboto:wght@500&display=swap" rel="stylesheet">

    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="./asset/images/icons/favicon.png">
</head>

<body>

    <div class="sticky">
        <div class="ham"><img height='30px' src="./asset/images/icons/icons8-menu-90.png" alt=""></div>
        <div class="sticky_options">
            <div class="sticky_box"><img height="60px" src="./asset/images/icons/logo2.png" alt=""></div>
            <div class="sticky_box"></div>
            <div class="sticky_box">Your search destination</div>
        </div>
    </div>

    <div class="top_section">
        <p class="title">Footgear Korner</p>
        <p class="sub_title">Your favourite shoe, sneakers, heels, boots, high heels and many more to your screen.</p>
    </div>

    <div class="main_body">
        <div class="content">
            <div class="content_right">
                <div class="content_right_box">
                    <div class="right_title">
                        Explore LLOYD shoes in 3D on smartphones & tablets, now!
                    </div>
                    <br>
                    <div class="right_content">
                        <p>
                            Lloyd Shoes GmbH from Sulingen (Germany) continues its innovation campaign by using our
                            technologies for presenting shoes in Augmented Reality on smartphones and tablets. Target
                            groups of the new Lloyd ShoeViewer app are customers, retailers and Lloyd’s own sales team.
                        </p>

                        <p>By using the App – available worldwide in English and German language for iOS and Android –
                            customers can scan printed ads in fashion magazines, in Lloyd’s publications and in various
                            other printed matters. After scanning, a shoe’s 3D model is automatically downloaded into
                            the app’s gallery. Additional information is available for every shoe, which allows a
                            purchase in local stores or over the internet. In the future there will also be a direct
                            bridge to the shopping experience.
                        </p>
                        <p>
                            The shoes can be viewed from all sides and close to the detail. The user is free to decide,
                            whether he prefers to view a 3D model in front of a monochrome background or in Augmented
                            Reality.
                        </p>
                        <p>
                            The shoes can be viewed from all sides and close to the detail. The user is free to decide,
                            whether he prefers to view a 3D model in front of a monochrome background or in Augmented
                            Reality.
                        </p>
                        <p>
                            The shoes can be viewed from all sides and close to the detail. The user is free to decide,
                            whether he prefers to view a 3D model in front of a monochrome background or in Augmented
                            Reality.
                        </p>
                        <p>
                            We realized this app for Lloyd Shoes GmbH in co-operation with Saint Elmo’s Hamburg.
                        </p>
                    </div>
                </div>
            </div>
            <div class="content_left">
                <div class="model">
                    <model-viewer class="home_model" bounds="tight" enable-pan src="./asset/glb/sneakers_2_tex2.glb" ar
                        ar-modes="webxr scene-viewer quick-look" camera-controls environment-image="neutral"
                        poster="poster.webp" shadow-intensity="1" autoplay>
                        <div class="progress-bar hide" slot="progress-bar">
                            <div class="update-bar"></div>
                        </div>
                        <button slot="ar-button" id="ar-button">
                            View in your space
                        </button>
                        <!-- <div id="ar-prompt">
                            <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
                        </div> -->
                    </model-viewer>

                </div>
                <div class="content_left_box">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptates officiis sequi placeat
                    ullam id cum necessitatibus omnis doloremque quos sunt in nostrum assumenda facere harum
                    consectetur, repudiandae illo fugiat! Minus ullam consectetur aliquam repudiandae eius sunt ad,
                    deleniti nemo, veritatis saepe porro! Animi deserunt expedita modi explicabo ab hic, vitae mollitia
                    a quia laborum aliquid ipsam laboriosam omnis? Corporis placeat earum libero? Aspernatur sapiente
                    nobis reprehenderit quas libero sint, asperiores eligendi, earum ea veniam eos unde accusantium
                    inventore totam!
                </div>
            </div>
        </div>
        <div class="link">
            <button type='button' class="title_btn"><a href="">Register</a></button>
            <button type='button' class="title_btn"><a href="./asset/html/choose.html">Go to the store</a></button>
        </div>
    </div>
    <div class="bottom_footer">
        <footer>
            <div class="footer_info">
                <img src="../asset/images/icons/icons8-creative-commons-64.png" alt="">
                <p>Attribution</p>
                <ul>
                    <li><a class="anchor" href="https://poly.pizza/m/cs7k_ENAZjQ">Poly.Pizza</a></li>
                    <li><a class="anchor" target="_blank" href="https://icons8.com">Icons8</a></li>
                    <li><a class="anchor" target="_blank" href="https://sketchfab.com/">Sketchfab</a></li>
                    <li><a class="anchor" target="_blank" href="https://unsplash.com/">Unsplash</a></li>
                </ul>
            </div>
            <div class="services">
                <img src="./asset/images/icons/icons8-services-64.png" alt="">
                <p>Our Servies</p>
            </div>
            <div class="company">
                <img src="./asset/images/icons/icons8-company-64.png" alt="">
                <p>Company</p>
            </div>
            <div class="follow_us">
                <img src="./asset/images/icons/icons8-multichannel-64.png" alt="">
                <p>Follow Us</p>
                <ul>
                    <li>
                        <a class="anchor" href="#">Linkedin</a>
                        <a href="#"><img class="footer_media"
                                src="./asset/images/icons/icons8-linkedin-32.png"></img></a>
                    </li>
                    <li>
                        <a class="anchor" href="#">Mail</a>
                        <a href="#"><img class="footer_media" src="./asset/images/icons/icons8-gmail-login-32.png"
                                alt=""></a>
                    </li>
                    <li>
                        <a class="anchor" href="#">Insta</a>
                        <a href="#"><img class="footer_media"
                                src="./asset/images/icons/icons8-instagram-32.png" alt=""></a>
                    </li>
                    <li>
                        <a class="anchor" href="#">Facebook</a>
                        <a href="#"><img class="footer_media" src="./asset/images/icons/icons8-facebook-32.png" alt=""></a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</body>

</html>
