<template>
	<div id="app">
		<header>
			<div class="doc-header"><a href="">B页面</a></div>
		</header>
		<section>
			<nav>
				<div class="doc-nav"></div>
			</nav>
			<article>
				<div class="doc-article"></div>
			</article>
		</section>
	</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	.doc-header {
		position: fixed;
		top: 0;
		width: 100%;
		padding: 18px;
		color: #666;
		background: #fff;
		font-size: 16px;
		border-bottom: solid 1px #eee;
		z-index: 10;
	}

	.doc-nav {
		position: fixed;
    top: 60px;
    left: 0;
    width: 20%;
    height: calc(100% - 60px);
    padding: 0 10px;
    background-color: #f7f7f7;
    overflow: auto;
	}

	.doc-article {
		float: right;
    width: 80%;
    margin-top: 60px;
	}
</style>