<?php
    session_start();
    if (empty($_SESSION['captcha_a']) || empty($_SESSION['captcha_b'])) {
        $_SESSION['captcha_a'] = rand(1, 10);
        $_SESSION['captcha_b'] = rand(1, 10);
    }

    $captcha_question = "What is {$_SESSION['captcha_a']} + {$_SESSION['captcha_b']}?";
?>
<!-- This is a single page application all other major functionalities use their own apps. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/main.css">
    <title>Them Cold Blooded Drifters</title>
</head>
<body>

    <!-- Fixed Elements - music record easter egg and socials sidebar-->
    
    <nav class="fixed_navbar_wrapper">
        <ul>
            <li id="home_button"><a href="#home">Home</a></li>
            <li id="about_button"><a href="#about">About</a></li>
            <li id="live_button" class="live_nav_button"><a href="#live">Live</a></li>
            <li id="booking_button"><a href="#booking">Booking</a></li>
            <li class="music_portal_link"><a href="#"> Music Portal</a></li>
            <li class="merch_store_link"><a href="#">Merch Store</a></li>
        </ul>
    </nav>

    <nav class="band_member_nav">
        <ul>
        </ul>
    </nav>

    <div class="hiddensiteimg">
        <img src="https://media.themcoldbloodeddrifters.com/assets/master/tempback.png" alt="">
    </div>

    <div class="corner_record_wrapper">
        <img id="record" src="https://media.themcoldbloodeddrifters.com/assets/master/corner_record.png" alt="Music Player">
    </div>
    <div class="socials_sidebar_wrapper">
        <div class="close_socials_button">
            >>
        </div>
        <div class="socials_inner_wrapper">
            <a href="https://www.facebook.com/people/Them-Coldblooded-Drifters/61574624801989/" target="_blank">
                <img src="https://media.themcoldbloodeddrifters.com/assets/master/socials/facebook.png" alt="Facebook">
            </a>
            <!-- Don't forget to come back and add target="_blank" -->
            <a href="https://www.instagram.com/them_coldblooded_drifters/" >
                <img src="https://media.themcoldbloodeddrifters.com/assets/master/socials/instagram.png" alt="Instagram">
            </a>
            <a href="https://tiktok.com/@themcoldbloodeddrifters">
                <img src="https://media.themcoldbloodeddrifters.com/assets/master/socials/tiktok.png" alt="Tik Tok">
            </a>
            <a href="https://www.youtube.com/@ThemColdbloodedDrifters">
                <img src="https://media.themcoldbloodeddrifters.com/assets/master/socials/youtube.png" alt="YouTube">
            </a>
        </div>
    </div>

    <div id="status_message" class="message_status"></div>
    <!-- Landing Page -->
    <div class="landing_section_wrapper">
        <div class="top">
            <div class="top_inner_wrapper">
                <img id="gun" src="https://media.themcoldbloodeddrifters.com/assets/master/tempback.png" alt="Them Cold Blooded Drifters">
            </div>
        </div>
        <div class="bottom">
            <div class="bottom_inner_wrapper">
                <nav class="navbar">
                    <ul>
                        <!-- Homepage will contain announcements and perhaps a short video about us -->
                        <li><a href="#home">Home</a></li>
                        <!-- The about page will have six sections -->
                        <!-- Section 1 The band -->
                        <!-- Section 2 Ryan -->
                        <!-- Section 3 Ethan -->
                        <!-- Section 4 Isa -->
                        <!-- Section 5 Roger -->
                        <!-- Section 6 Aiden -->
                        <li><a href="#about">About</a></li>
                        <!-- The Live section of the site will contain dates for shows -->
                        <!-- <li class="live_nav_button"><a href="#live">Live</a></li> -->
                        <!-- Will allow users to send an email to booking@themcoldbloodeddrifters.com -->
                        <li ><a href="#booking">Booking</a></li>
                        <!-- music.themcoldbloodeddrifters.com A THREE.js app that will contain an interactive music player -->
                        <li><a href="#">Music Portal</a></li>
                        <!-- store.themcoldbloodeddrifters.com will be the merch store application -->
                        <!-- This will be a laravel application and will be separate from the main site -->
                        <li><a href="#">Merch Store</a></li>
                    </ul>
                    <ul class="mobile_socmed">

                        <div class="mobile_socmed_section">
                            <li>
                            <a href="https://www.facebook.com/people/Them-Coldblooded-Drifters/61574624801989/" target="_blank">
                                <img src="https://media.themcoldbloodeddrifters.com/assets/master/socials/facebook.png" alt="Facebook">
                            </a>
                        </li>
                        <!-- Don't forget to come back and add target="_blank" -->
                        <li>
                            <a href="https://www.instagram.com/them_coldblooded_drifters/" target="_blank">
                                <img src="https://media.themcoldbloodeddrifters.com/assets/master/socials/instagram.png" alt="Instagram">
                            </a>
                        </li>
                        </div>
                        <div class="mobile_socmed_section">
                            <li>
                                <a href="https://tiktok.com/@themcoldbloodeddrifters" target="_blank">
                                    <img src="https://media.themcoldbloodeddrifters.com/assets/master/socials/tiktok.png" alt="Tik Tok">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@ThemColdbloodedDrifters" target="_blank">
                                    <img src="https://media.themcoldbloodeddrifters.com/assets/master/socials/youtube.png" alt="YouTube">
                                </a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <!-- Home Page section -->
    <div class="home_wrapper" id="home">
        <div class="main_content_wrapper">
            <div class="announcements_wrapper">
                <div class="header">
                    <h1>Announcements</h1>
                </div>
                <div class="slider_wrapper">

                    <div class="carousel"></div>
                    <div class="carousel_indicator_wrapper"></div>
                    <div class="blurb_container"></div>
                </div>
            </div>
            <div class="article_section_wrapper">
                <article class="text_left_wrapper">
                    <p id="left_home_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit exercitationem natus voluptatem, culpa fugiat? In nisi explicabo aliquam suscipit, doloremque eum quam ex ducimus soluta omnis tempore porro ratione accusamus delectus animi aperiam. Reprehenderit, minima sapiente animi, nisi incidunt ea facilis iste culpa, voluptate doloremque dolorem a. Nesciunt nisi excepturi pariatur dolorum delectus odit eos, beatae quidem labore cumque ex, omnis eum, officia aspernatur iure nulla eveniet. Magnam labore fugiat fuga iure molestias obcaecati libero asperiores natus ea error!</p>
                </article>
                <article class="text_right_wrapper">
                    <p id="right_home_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore cum tenetur ex quibusdam voluptate et. Numquam veniam molestiae illo delectus, voluptate excepturi! Eaque nisi itaque optio modi at odio voluptates eum accusantium repellat nobis in, quis sit est voluptate, reiciendis a! Id magni qui officia accusamus earum nesciunt incidunt, eveniet assumenda cum rem voluptatibus nostrum adipisci minus dicta reiciendis nihil cupiditate voluptatum error consectetur reprehenderit sit! Dolore corrupti eius laudantium aut a doloribus voluptatum id?</p>
                </article>
            </div>
        </div>
    </div>
    <!-- About Page section -->
    <div class="about_wrapper" id="about">
        
    </div>
    <div class="live_wrapper" id="live">

    </div>
    <div class="booking_wrapper" id="booking">
        <form class="booking_form" method="POST">
            <label for="contact_name">Company/Your Name:</label>
            <input type="text" name="contact_name" id="contact_name_input" required>

            <label for="message_subject">Subject:</label>
            <select name="message_subject" id="contact_subject_select_field">
                <option id="book" value="book">Booking</option>
                <option id="inquiry" value="inquiry">Inquiry</option>
            </select>

            <label for="contact_phone">Phone Number:</label>
            <input type="text" name="contact_phone" id="phone" required>

            <label for="message_body">Message</label>
            <textarea name="message_body" id="message_body"></textarea>

            <label id="captcha_label">
                <?php echo htmlspecialchars($captcha_question, ENT_QUOTES, 'UTF-8'); ?>
            </label>
            <input type="number" name="captcha" id="captcha_input" required>

            <button type="button" class="send_message_button">Send</button>
        </form>
    </div>
    <footer>
        <div class="footer_section">
            
        </div>
        <div class="footer_section">
            <p id="copyright_year"></p>
        </div>
        <div class="footer_section">

        </div>
    </footer>
    <script src="scripts/main.js"></script>
</body>
</html>