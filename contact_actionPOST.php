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
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $telefone = $_POST["telefone"];
    ?>
    <!--MENU-->
    <div class="header">
        <a id='homeMenu' href="index.html">Home</a>
        <a class='link' href="about.html">Sobre</a>
        <a class='link' href="primavera.html">Primavera</a>
        <a class='link' href="verao.html">Verão</a>
        <a class='link' href="outono.html">Outono</a>
        <a class='link' id='invernoMenu'href="inverno.html">Inverno</a>
    </div>

    <!--TOPO-->
    <div class="topoSeason">
        <div class="seasonTitle">
            Preencha o formulário <br> abaixo para receber<br><span class="purpleBgHome">dicas</span> por e-mail!
        </div>
    </div>

    <table class="tableCSS">
        <tr>
            <th>CAMPO</th>
            <th>VALOR</th></tr>
        <tr>
            <th>Nome</th>
            <td><?php echo $nome?></td>
        </tr>
        <tr>
            <th>E-mail</th>
            <td><?php echo $email?></td>
        </tr>
        <tr>
            <th>Telefone</th>
            <td><?php echo $telefone?></td>
        </tr>
    </table>
    <input type=button class="submitButton" value="<< Retornar">

    <!--SCRIPT-->
    <script src='script/script.js'></script>
</body>