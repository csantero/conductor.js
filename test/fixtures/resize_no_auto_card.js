Conductor.card({
  activate: function () {
    var card = this;
    card.consumers.height.autoUpdate = false;

    setTimeout( function () {
      var bigNode = document.createElement("div");
      bigNode.style.width = "600px";
      bigNode.style.height = "700px";

      document.body.style.padding = "1px";
      document.body.style.margin = "2px";
      document.body.style.border = "solid transparent 4px";
      document.body.appendChild(bigNode);
      card.consumers.assertion.send('go');
    });
  }
});
