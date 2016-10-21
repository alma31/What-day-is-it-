"use strict";
(function(){
	var app = {
		jours:null,
		mois:null,
		annee:null,
		init:function(){
			$('#message3').hide();
			$('#message1').hide();
			$('#message').hide();
			this.listeners();
			moment.locale('fr');

		},
		listeners: function(){
			$('#btn').on('click',this.donnee.bind(this));
			console.log("teste");
		},

		donnee: function(){
			this.jours = $("#jour").val();
			if (this.jours >= 1 && this.jours <= 31){
				this.verification();
			} else { $('#message').show();}
			this.mois = $("#mois").val();
			this.annee = $("#annee").val();
			if (this.annee > 0) { this.verification();}
			else { $('#message1').show();}
			this.verification();
		},

		verification: function(){
			var day = moment(this.annee +"-"+ this.mois +"-"+ this.jours);
			console.log(day.format('dddd'));
			$('#message3').show();
			$("#message3").text(day.format('dddd'));
			$('.corps').hide();
		},

	};
	app.init();
})();