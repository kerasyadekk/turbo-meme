<script>
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function buatistri(length) {
        var result = '';
        var characters = 'bcdfghjklmnpqrstvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    function buatanak(length) {
        var result = '';
        var characters = 'aeiou';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    function buatjanda(length) {
        var result = '';
        var characters = 'bcdfghjklmnpqrstvwxyz1234567890';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    function dibuat(length) {
        var result = '';
        var characters = '****';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    setInterval(function () {
        var y = ["500.000", "850.000", "700.000", "900.000", "1.000.000", "1.250.000", "1.500.000", "200.000", "250.000", "1.900.000", "2.000.000", "2.100.000", "2.150.000", "2.250.000", "2.500.000", "2.700.000", "2.800.000", "2.900.000", "3.000.000", "200.000", "250.000", "3.500.000", "3.700.000", "3.900.000", "4.000.000", "4.250.000", "4.500.000", "4.750.000", "130.000", "150.000", "5.000.000", "5.120.000", "5.250.000", "5.500.000", "6.000.000", "7.800.000", "350.000", "300.000", "9.800.000", "10.000.000", "12.200.000", "12.500.000", "15.000.000", "120.000", "125.000", "24.800.000", "28.000.000", "30.200.000"];
        var d = ["https://trustpositif.com/wp-content/uploads/2024/07/BCA.png", "https://trustpositif.com/wp-content/uploads/2024/07/MANDIRI.png", "https://trustpositif.com/wp-content/uploads/2024/07/BNI.png", "https://trustpositif.com/wp-content/uploads/2024/07/BRI.png", "https://trustpositif.com/wp-content/uploads/2024/07/DANA.png", "https://trustpositif.com/wp-content/uploads/2024/07/OVO.png", "https://trustpositif.com/wp-content/uploads/2024/07/GOPAY.png"];
        for (let i = 1; i <= 300; i++) {
            var yy = getRandomInt(1, 48);
            var dd = getRandomInt(1, 7);
            var xx = y[yy];
            var ee = d[dd];
            var z = getRandomInt(3, 6);
            var user = buatistri(1) + buatanak(1) + dibuat(z) + buatjanda(1);
            document.getElementById("winner-info").innerHTML = user + " Telah Melakukan WD Sebesar " + xx;
            document.getElementById("imageid").src = ee;
        }
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }, 3000)
</script>
