"use strict";
(function(){
	var app = {
		jours:null,
		mois:null,
		annee:null,

		init:function(){
			this.listeners();
			this.functionCacher();
		},
		
		listeners: function(){
			$('#btn').on('click',this.donnee.bind(this));
			console.log("teste");
		},

		donnee: function(){
			this.mois = $("#mois").val();
			this.annee = $("#annee").val();
			this.jours = $("#jour").val();
			if (this.jours >= 1 && this.jours <= 31 && this.annee > 0){
				this.verification();

			} else if(this.annee <= 0) { 
				$('#message1').show(0).hide(15000);}

			else if (this.jours <= 0){  
				$('#message').show(0).hide(15000);}

			else if (this.jours >=32){
				$('#message').show(0).hide(15000);}

		},

			verification: function(){

				var day = moment(this.annee +"-"+ this.mois +"-"+ this.jours);
				console.log(day.format('dddd'));
				$('#message3').show();
				$("#message3").text(day.format('dddd'));
				$('.corps').hide();
		},

			functionCacher: function(){
				$('#message3').hide();
				$('#message1').hide();
				$('#message').hide();

		},
	};
app.init();
})();