var lines = document.getElementById('EntireP').getElementsByTagName('span');
var Vid = document.getElementById('theVid');
var now = Vid.currentTime;


	Vid.addEventListener('timeupdate', () => {
		for (var i = 0, l = lines.length; i < l; i++) {
		  if (now >= lines[i].getAttribute('data-start') &&
		      now <= lines[i].getAttribute('data-end')) {
		    lines[i].className = "MediaText";
		  } else {
		    lines[i].className = "";
		  }
		}
	});
