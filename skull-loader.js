// from http://www.cartelle.nl/deathpaint/
// SEE ALSO http://webglworkshop.com/algo/skully-colour.html


function loadModel()
		{
			var loader = new THREE.JSONLoader( true );
			loader.load( "assets/skull.js", function( geometry )
			{
				mesh = new THREE.Mesh( geometry);
				loadColorTexture();
			} );
		}

		function loadColorTexture()
		{
			var textureImg = new Image();
			textureImg.onload = function()
			{
				var el = document.createElement('canvas');
				el.width = this.width;
				el.height = this.height;
				var ctx = el.getContext('2d');
				ctx.drawImage(this,0,0);
				var colorMap = new THREE.Texture( el );
				colorMap.flipY = false;
				colorMap.needsUpdate = true;
				colorMaterial = new THREE.MeshBasicMaterial( { map:colorMap } );
				loadPaintableTexture();
			};
			textureImg.src = "assets/skull_new_model_color_texture.png";
		}
