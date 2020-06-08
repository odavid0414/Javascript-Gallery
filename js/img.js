var kepek = document.querySelectorAll(".DIVimg");
var modalkepek = document.querySelectorAll(".img");
var k = 0;
var AktualisOldal = 1;
var maradek = 0;
var ElozoErtek = 0;
var LathatoKepek = parseInt(document.getElementsByTagName("option")[0].value);
var OldalSzam = 0;
OsszesOldal();

for (k = LathatoKepek; k < kepek.length; k++)
{
	kepek[k].style.display = "none";
}

function KepTorol(LathatoKepek,k)
{
	for (i = 0; i < LathatoKepek; i++)
	{
		kepek[k].style.display = "none";
		k++;
	}
}
function KepTorolPrev(LathatoKepek,k)
{
	for (i = 0; i < LathatoKepek; i++)
	{
		kepek[k].style.display = "none";
		k--;
	}
}

function KepMegjelen(LathatoKepek, k)
{
	for (i = 0; i < LathatoKepek; i++)
	{
		kepek[k].style.display = "block";
		k++;
	}
}

function KepMegjelenPrev(LathatoKepek, k)
{
	for (i = 0; i < LathatoKepek; i++)
	{
		kepek[k].style.display = "block";
		k--;
	}
}

function LathatoKepSzam()
{
	var x = document.getElementById("LathatoKepek").selectedIndex;
	LathatoKepek = parseInt(document.getElementsByTagName("option")[x].value);
	return LathatoKepek;
}

function OsszesOldal()
{
	OldalSzam = Math.ceil(kepek.length / LathatoKepSzam());
	document.getElementById("OsszesOldal").innerHTML = OldalSzam;
	if (OsszesOldal == 1)
	{
		AktualisOldal = 1;
	}
	if (AktualisOldal > OldalSzam)
	{
		AktualisOldal = OldalSzam;
	}
	document.getElementById("AktualisOldal").innerHTML = AktualisOldal;	
	maradek = kepek.length % LathatoKepSzam();
}

function OldalFel()
{	
	if (AktualisOldal != OldalSzam)
	{
		AktualisOldal++;
		document.getElementById("AktualisOldal").innerHTML = AktualisOldal;
	}
	else
	{
		AktualisOldal = 1;
		document.getElementById("AktualisOldal").innerHTML = AktualisOldal;
	}
}

function OldalLe()
{	
	if (AktualisOldal != 1)
	{
		AktualisOldal--;
		document.getElementById("AktualisOldal").innerHTML = AktualisOldal;
	}
	else
	{
		AktualisOldal = OldalSzam;
		document.getElementById("AktualisOldal").innerHTML = AktualisOldal;
	}
}

function OptionChange()
{
	var ElozoErtek = LathatoKepek;
	if (LathatoKepSzam() >= kepek.length)
	{
		KepMegjelen(kepek.length-ElozoErtek, ElozoErtek);
	}
	else if (ElozoErtek < LathatoKepSzam())
	{
		if (AktualisOldal == 1 && AktualisOldal+1 != OldalSzam && AktualisOldal != OldalSzam)
		{
			KepMegjelen(LathatoKepSzam()-ElozoErtek,ElozoErtek);
		}
		else
		{
			if (LathatoKepSzam()-ElozoErtek >= kepek.length-(AktualisOldal*ElozoErtek))
			{
				KepMegjelen(kepek.length-(AktualisOldal*ElozoErtek),AktualisOldal*ElozoErtek);	
			}
			else
			{
				KepMegjelen(LathatoKepSzam()-ElozoErtek,AktualisOldal*ElozoErtek);
			}
		}
	}
	else
	{
		if (AktualisOldal == OldalSzam && LathatoKepSzam() > kepek.length - (AktualisOldal+1)*LathatoKepSzam())
		{
		}
		else
		{
			KepTorol(ElozoErtek-LathatoKepSzam(),AktualisOldal*LathatoKepSzam());
		}
	}
	OsszesOldal();
}
function prev()
{
	OsszesOldal();
	if (AktualisOldal == 1)
	{
		KepTorol(LathatoKepSzam(),0);
		KepMegjelen(LathatoKepSzam(),kepek.length-LathatoKepSzam());
	}
	else if (AktualisOldal == OldalSzam)
	{
		KepTorol(LathatoKepSzam(),kepek.length-LathatoKepSzam());
		KepMegjelenPrev(LathatoKepSzam(),((AktualisOldal-1)*LathatoKepSzam())-1);		
	}
	else
	{
		KepTorolPrev(LathatoKepSzam(),(AktualisOldal*LathatoKepSzam())-1);
		KepMegjelenPrev(LathatoKepSzam(),((AktualisOldal-1)*LathatoKepSzam())-1);
	}
	OldalLe();
}

function next()
{
	OsszesOldal();
	if (AktualisOldal == 1 && AktualisOldal+1 != OldalSzam && AktualisOldal != OldalSzam)
	{
		KepTorol(LathatoKepSzam(),0);
		KepMegjelen(LathatoKepSzam(),LathatoKepSzam());
	}
	else if (AktualisOldal+1 == OldalSzam)
	{
		KepTorol(LathatoKepSzam(),(AktualisOldal-1)*LathatoKepSzam());
		KepMegjelen(maradek, (AktualisOldal*LathatoKepSzam())-1);
	}
	else if (AktualisOldal == OldalSzam)
	{
		KepTorol(kepek.length-(AktualisOldal*ElozoErtek), AktualisOldal*ElozoErtek);
		KepMegjelen(LathatoKepSzam(), 0);
	}
	else
	{
		KepTorol(LathatoKepSzam(),(AktualisOldal-1)*LathatoKepSzam());
		KepMegjelen(LathatoKepSzam(),AktualisOldal*LathatoKepSzam());	
	}
	OldalFel();
}

function miniprev()
{
	if (k == 0)
	{
		k = kepek.length-1;
	}
	else
	{
		k--;
	}
	var PrevImg = $(modalkepek[k]).attr('src');
	document.getElementById("ModalImage").setAttribute('src', PrevImg);
}
function mininext()
{
	if (k == kepek.length-1)
	{
		k = 0;
	}
	else
	{
		k++;
	}
	var NextImg = $(modalkepek[k]).attr('src');
	document.getElementById("ModalImage").setAttribute('src', NextImg);
}

function modal(src)
{
	var ClickedImage = $(src).attr('src');
	document.getElementById("modal-body").innerHTML = "<img src='#' id='ModalImage' width='100%'>";
	document.getElementById("ModalImage").setAttribute('src', ClickedImage);
	for (i = 0; i< kepek.length; i++)
	{
		if ($(modalkepek[i]).attr('src') == ClickedImage)
		{
			k = i;
		}
	}
}