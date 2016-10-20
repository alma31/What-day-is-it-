"use strict";
(function(){
	var app = {
		jours:null,
		mois:null,
		annee:null,
		init:function(){
			$('#message1').hide();
			$('#message').hide();
			this.listeners();

		},
		listeners: function(){
			$('#btn').on('click',this.donnee.bind(this));
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
			console.log(this.jours,this.mois,this.annee);
		},




	};
app.init();
})();