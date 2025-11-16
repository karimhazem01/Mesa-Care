        $(document).ready(function() {
            // Back to top button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 300) {
                    $('.back-to-top').addClass('active');
                } else {
                    $('.back-to-top').removeClass('active');
                }
            });
            
            $('.back-to-top').click(function(e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: 0}, 800);
            });
            
            // Navbar background on scroll
            $(window).scroll(function() {
                if ($(window).scrollTop() > 50) {
                    $('.navbar').addClass('navbar-scrolled');
                } else {
                    $('.navbar').removeClass('navbar-scrolled');
                }
            });
            
            // Smooth scrolling for navbar links
            $('.navbar-nav a').on('click', function(e) {
                if (this.hash !== "") {
                    e.preventDefault();
                    
                    const hash = this.hash;
                    
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 70
                    }, 800);
                    
                    // Update active nav link
                    $('.navbar-nav a').removeClass('active');
                    $(this).addClass('active');
                }
            });
            
            // Book Now button functionality
            $('#bookNowBtn').on('click', function() {
                $('html, body').animate({
                    scrollTop: $('#booking').offset().top - 70
                }, 800);
            });
            
            // View Services button functionality
            $('#viewServicesBtn').on('click', function() {
                $('html, body').animate({
                    scrollTop: $('#services').offset().top - 70
                }, 800);
            });
            
            // Start Now button functionality
            $('#startNowBtn').on('click', function() {
                $('html, body').animate({
                    scrollTop: $('#booking').offset().top - 70
                }, 800);
            });
            
            // Booking form submission
// Booking form using EmailJS
$('#bookingForm').on('submit', function(e) {
    e.preventDefault();

    const form = this; // DOM element for emailjs.sendForm
    const button = $(this).find('button[type="submit"]');

    // Disable button while sending
    button.prop('disabled', true).text('جاري الإرسال...');

    emailjs.sendForm("service_hsfcc18", "template_qfz5pya", form)
        .then(function () {

            // Success message
            $('#bookingForm').html(`
                <div class="success-box">
                    <h3>✅ تم حجز الجلسة بنجاح!</h3>
                    <p>شكراً لتواصلك معنا. سيتم التواصل معك لتأكيد موعد الحجز.</p>
                </div>
            `);

        }, function (error) {
            console.log(error);
            button.prop('disabled', false).text('احجز الآن');
            alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
        });
});

    // NavBar active on scroll
    $(window).on('scroll', function() {
    var scrollPos = $(document).scrollTop() + 80; // Adjust 80 for navbar height
    $('.navbar-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav a').removeClass("active");
            currLink.addClass("active");
        }
    });
});

        });
