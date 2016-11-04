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
			$('.restart').on('click',this.restart.bind(this));
		},

		donnee: function(){
			this.init();
			this.mois = $("#mois").val();
			this.annee = $("#annee").val();
			this.jours = $("#jour").val();
			if (this.jours >= 1 && this.jours <= 31 && this.annee > 0){
				this.verification();}

				else if (this.jours === "" && this.annee === ""){
					$('#message4').show();
					$('#jour').css('border-color','#ff7473');
					$('#annee').css('border-color','#ff7473');}
					
					else if(this.annee <= 0) { 
						$('#message1').show();
						$('#annee').css('border-color','#ff7473');}

						else if (this.jours <= 0){  
							$('#message').show();
							$('#jour').css('border-color','#ff7473');}

							else if (this.jours >= 32){
								$('#message').show();
								$('#jour').css('border-color','#ff7473');}
							},

							verification: function(){

								var day = moment([this.annee, this.mois, this.jours]);
								$('#message3').show();
								$('.restart').show();
								$('body').css("background-color","#9055A2");
								$("#message3").text(day.format('dddd'));
								$('.corps').hide();
							},

							functionCacher: function(){
								$('.restart').hide();
								$('#message3').hide();
								$('#message1').hide();
								$('#message').hide();
								$('#message4').hide();

							},

							restart: function(){
								window.location.reload()
							},
						};
						app.init();
					})();