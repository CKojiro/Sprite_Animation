const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./anime_sprite_sheet.png");

ASSET_MANAGER.downloadAll(() =>
{
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    gameEngine.addEntity(new Sprite(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
