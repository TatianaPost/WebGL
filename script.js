window.onload = function() {
  Player.init();
};
Player = {
  init: function() {
    let container = document.getElementsByClassName('webgl')[0];
    this.scene = new THREE.Scene();
    window.scene = this.scene;

    let axisHelper = new THREE.AxesHelper(500);
    this.scene.add(axisHelper);

    let aspect = container.offsetWidth / container.offsetHeight;
    this.camera = new THREE.PerspectiveCamera(30.0, aspect, 1, 1000);
    this.scene.add(this.camera);

    let light = new THREE.AmbientLight();
    this.scene.add(light);

    this.renderer  = new THREE.WebGLRenderer();
    container.appendChild(this.renderer.domElement);
    this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    let geometry = new THREE.SphereGeometry(5, 10, 10);
    let material = THREE.MeshPhongMaterial({color: 0x346634});
    let mesh = new THREE.Mesh(geometry, material);
    this.controls = new THREE.TrackballControls(this.camera, container);
    this.scene.add(mesh);
    this.animate();
  },
  animate: function () {
    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
};