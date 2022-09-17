<template>
  <div>
<main class="container">
    <h2 class="form-subtitle">Upload travel Documents</h2>
	<form action="" method="post" class="form-body">
		<div>
			<div>
				<label class="form-label" for="name">Nombre *</label>
				<input class="input-text" type="text" name="name" id="name" placeholder="Angel" />
			</div>

			<div>
				<label class="form-label" for="last-name">Apellidos *</label>
				<input class="input-text" type="text" name="last-name" id="last-name" placeholder="Burciaga" />
			</div>
			<div>
				<label class="form-label" for="mail">Correo electrónico *</label>
				<input class="input-text" type="email" name="mail" id="mail" placeholder="name@overwatch.com" />
			</div>
		</div>

		<div>
			<div>
				<label class="form-label" for="password">Contraseña *
					<span class="subtitle">(Mínimo 8 caracteres)</span></label>
				<input class="input-text" type="password" name="password" id="password" placeholder="********" />
			</div>
			<div>
				<label class="form-label" for="password-confirmation">Confirma tu contraseña *</label>
				<input class="input-text" type="password" name="password-confirmation" id="password-confirmation" placeholder="********" />
			</div>

			<p class="form-legend highlighted">Campos obligatorios *</p>

			<div class="form-footer">
				<div class="form-check">
					<input type="checkbox" name="newsletter" id="newsletter" />
					<label for="newsletter">Deseo recibir las últimas noticias
					</label>
				</div>

				<div class="form-check">
					<input type="checkbox" name="conditions" id="conditions" />
					<label for="conditions" class="highlighted">
						Acepto <a href="">Términos y condiciones </a>
					</label>
				</div>

				<button type="submit" class="form-submit" value="create-account">
					Crear cuenta
				</button>
			</div>
		</div>
	</form>
</main>

  </div>
</template>

<script>
export default {

}
</script>

<style>
:root {
	--dark: #5a5a5a;
	--beige: #a0d4ff;
	--gold: #ff9d00;
	--brown: #ff8800;
	--white: #ffffff;
}

/* :: Base :: */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: "Montserrat", sans-serif;
	color: var(--dark);
	font-size: 16px;
	padding-block: 50px;
}

img {
	max-width: 100%;
	vertical-align: top;
}

a {
	color: inherit;
}

input,
[type="submit"] {
	all: unset;
	width: 100%;
}

[type="submit"] {
	cursor: pointer;
}

/* :: Layout :: */
.container {
	width: min(1030px, 90%);
	margin-inline: auto;
}

.form-header {
	text-align: center;
	margin-bottom: 25px;
}

/* :: Modules :: */
.form-icon {
	max-width: 90px;
	margin-bottom: 28px;
}

.form-title {
	font-size: 22px;
	margin: 0 auto 16px;
}

.form-subtitle {
	font-size: 18px;
	margin-block: 0;
}

.benefits {
	list-style-type: none;
	text-align: left;
	margin-top: 30px;
}

.benefits-item {
	margin-bottom: 16px;
}

.benefits-icon {
	font-size: 20px;
	margin-right: 5px;
}

.form-body {
	background-color: var(--beige);
	padding: 20px 15px;
	border-radius: 8px;
}

.form-label {
	margin-bottom: 12px;
	display: block;
	font-weight: bold;
}

.input-text {
	background-color: var(--white);
	box-sizing: border-box;
	padding: 15px 12px;
	font-family: "Montserrat", sans-serif;
	border-radius: 8px;
	margin-bottom: 30px;
	border: 2px solid transparent;
}

.input-text:focus-visible,
.input-text:focus {
	border: 2px solid var(--brown);
}

.form-legend {
	margin-bottom: 25px;
}

.form-footer > *:not(:last-child) {
	margin-bottom: 25px;
}

.form-check {
	font-size: 14px;
}

.form-submit {
	background-color: var(--gold);
	color: var(--white);
	text-align: center;
	font-weight: 600;
	padding-block: 10px;
	border-radius: 8px;
}

/* :: State :: */
.highlighted {
	font-weight: 600;
}

/* :: Mediaqueries :: */
@media screen and (min-width: 700px) {
	.form-body {
		display: flex;
		gap: 60px;
		justify-content: space-between;
		padding: 28px 30px;
	}

	.form-body > div {
		width: 50%;
	}

	.benefits {
		display: flex;
		justify-content: space-between;
		gap: 15px;
		margin-top: 40px;
	}

	.benefits-item {
		width: 33%;
		margin-bottom: 0;
		text-align: center;
	}
}

/* :: checkbox styles :: */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
	position: absolute;
	left: 0;
	opacity: 0.01;
}

[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
	position: relative;
	padding-left: 28px;
	cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	width: 18px;
	height: 18px;
	background: var(--white);
	border-radius: 50%;
	-webkit-transition: all 0.275s;
	transition: all 0.275s;
}

[type="checkbox"]:checked + label:before {
	background: var(--brown);
}

/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
	content: "";
	position: absolute;
	top: 3px;
	left: 3px;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	-webkit-transition: all 0.2s;
	transition: all 0.2s;
	background: var(--gold);
}

/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
	opacity: 0;
}

[type="checkbox"]:checked + label:after {
	opacity: 1;
}

</style>