	pw_main = new Image(500,500)
	pw_main.src = "img/wheels/pw_main.png"

	pw_3d = new Image(500,500)
	pw_3d.src = "img/wheels/pw_FPGA3D.png"

	pw_rsvp = new Image(500,500)
	pw_rsvp.src = "img/wheels/pw_rsvp.png"

	pw_case = new Image(500,500)
	pw_case.src = "img/wheels/pw_CASE.png"

	pw_caterham = new Image(500,500)
	pw_caterham.src = "img/wheels/pw_caterham.png"

	pw_steam = new Image(500,500)
	pw_steam.src = "img/wheels/pw_steamCar.png" 

	pw_dart = new Image(500,500)
	pw_dart.src = "img/wheels/pw_dartBoard.png"

	pw_water = new Image(500,500)
	pw_water.src = "img/wheels/pw_water.png"

	pw_co333 = new Image(500,500)
	pw_co333.src = "img/wheels/pw_co333.png"

	pw_emsys = new Image(500,500)
	pw_emsys.src = "img/wheels/pw_emsysiot.png"

	function rsvp() {
		document.emp.src = pw_rsvp.src; return true;
	}

	function caterham() {
		document.emp.src = pw_caterham.src; return true;
	}

	function steamCar() {
		document.emp.src = pw_steam.src; return true;
	}

	function dartBoard() {
		document.emp.src = pw_dart.src; return true;
	}

	function FPGA() {
		document.emp.src = pw_3d.src; return true;
	}

	function co333() {
		document.emp.src = pw_co333.src; return true;
	}

	function water() {
		document.emp.src = pw_water.src; return true;
	}

	function ibmcase() {
		document.emp.src = pw_case.src; return true;
	}

	function emsys() {
		document.emp.src = pw_emsys.src; return true;
	}

	function original() {
		document.emp.src = pw_main.src; return true; 
	}