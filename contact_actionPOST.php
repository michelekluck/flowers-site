<head>
    <meta charset="UTF-8">
    <title>Flores das Estações</title>
    <link rel="stylesheet" href="css/layout.css" type="text/css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Kumbh+Sans:wght@100..900&family=Madimi+One&family=Quicksand:wght@300..700&display=swap');
    </style>
</head>

<body> <!--GET-->
    <?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $celular = $_POST["celular"];
    ?>
    <!--MENU-->
    <div class="header">
        <a id='homeMenu' href="index.html">Home</a>
        <a class='link' href="about.html">Sobre</a>
        <a class='link' href="primavera.html">Primavera</a>
        <a class='link' href="verao.html">Verão</a>
        <a class='link' href="outono.html">Outono</a>
        <a class='link' id='invernoMenu' href="inverno.html">Inverno</a>
    </div>

    <!--TOPO-->
    <div class="topoSeason">
        <div class="seasonTitle">
            Dados de <span class="purpleBgSeason">Contato</span>
        </div>
    </div>
    <div class="topoSubtitleForm">
        <div class="formSubtitle">
            PHP recebe os dados enviados via POST de um form HTML
        </div>
    </div>

    <div class="tableBody">
        <table class="tableCSS">
            <tr>
                <th class="tableCampo tableTitle">CAMPO</th>
                <th class="tableValor tableTitle">VALOR</th>
            </tr>
            <tr>
                <th class="tableCampo">Nome:</th>
                <td class="tableValor"><?php echo $name ?></td>
            </tr>
            <tr>
                <th class="tableCampo">E-mail:</th>
                <td class="tableValor"><?php echo $email ?></td>
            </tr>
            <tr>
                <th class="tableCampo">Celular:</th>
                <td class="tableValor"><?php echo $celular ?></td>
            </tr>
        </table>
        <input type=button class="submitButton tableButton" value="Voltar">
    </div>
    <!--SCRIPT-->
    <script src='script/script.js'></script>
</body>