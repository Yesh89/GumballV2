
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.index = function(req, res){
	var http = require('http');
	var Client = require('node-rest-client').Client;
	var client = new Client();

	// direct way
	client.get("http://GumballMachineVersion2.cfapps.io/gumballs.json", function(getreq, response){
		
		
		console.log ("I reached here ....");

	            var ar={};
	            
	            ar=getreq;
	            console.log(typeof ar);
	            var Array=[];

	            Array.push(ar[0].modelNumber);
	            console.log(ar[0].modelNumber);
	            console.log ("I reached here 2 ....");
	            Array.push(ar[0].serialNumber);
	            Array.push("NoCoinState");
	            Array.push(ar[0].countGumballs);
	            
	            console.log ("I reached here 3 ....");
	            res.render('index', {"userlist": Array});
	            
	            
	        });
	
	
};

exports.GumballAction=function(req,res){
	
	var e1=req.param('event');
	console.log(e1);
	var s1=req.param('state');
	console.log(s1);
	var count=req.param('count');
	console.log(count);
	var model=req.param('modelNumber');
	console.log(model);
	var serial=req.param('serialNumber');
	console.log(serial);
	
	
	if(e1==='InsertQuarter' && s1==='NoCoinState'){
		
		s1='HasGotCoin';
		var Array=[];
		
		Array.push(model);
		Array.push(serial);
		Array.push(s1);
		Array.push(count);
		console.log("i am here now inside....");
		res.render('index', { "userlist": Array});
		}
	console.log("i am here now....");
	
	if(e1==='TurnCrankNow' && s1==='HasGotCoin'){
		var Array=[];
		var Client = require('node-rest-client').Client;
		var client = new Client();
		client.get("http://GumballMachineVersion2.cfapps.io/gumballs.json", function(data, response){
			var ar={};
            
            ar=data;
            
            var count=ar[0].countGumballs;
            
            if(count!==0){
            	count=count-1;
            	var args = {
            			  data: { countGumballs: count },
            			  headers:{"Content-Type": "application/json"} 
            			};
            	client.put("http://GumballMachineVersion2.cfapps.io/gumballs/1", args, function(data,response) {
            	    console.log(data);
            	    // raw response
            	    console.log(response);
            	    var Array=[];
            	    Array.push(model);
            	    Array.push(serial);
            	    Array.push("NoCoinState");
            	    Array.push(count);
            		res.render('index', {"userlist": Array });
            	});
            	
            }
			
			
		});
		
		
	}
	
};


exports.getindex = function(req,res){
   var model=req.params.Model;
   console.log("model is " + model);
   var num=req.params.Serial;
   console.log("Num is " + num);
   var count=req.params.State;
   console.log("Count is " + count);
   
   var Json=JSON.stringify({
	 Name: " Mighty Gumball, Inc.",
	 ModelNum:model,
	 SerialNum:num,
	 Count:count
	   
   });
   
	res.render('index', {"JsonValue":Json});	
};

exports.getindexhascoin = function(req,res){
	   var model=req.params.Model;
	   console.log("model is " + model);
	   var num=req.params.Serial;
	   console.log("Num is " + num);
	   var count=req.params.State;
	   console.log("Count is " + count);
	   
	   var Json=JSON.stringify({
		 Name: " Mighty Gumball, Inc.",
		 ModelNum:model,
		 SerialNum:num,
		 Count:count
		   
	   });
	   
		res.render('index', {"JsonValue":Json});	
	};

	
	exports.getindexturncrank = function(req,res){
		   var model=req.params.Model;
		   console.log("model is " + model);
		   var num=req.params.Serial;
		   console.log("Num is " + num);
		   var count=req.params.State1;
		   console.log("Count is " + count);
		   
		   var Json=JSON.stringify({
			 Name: " Mighty Gumball, Inc.",
			 ModelNum:model,
			 SerialNum:num,
			 Count:count
			   
		   });
		   
			res.render('index', {"JsonValue":Json});	
		};


exports.insertquater = function(req,res){
	
	var id = req.params.id; 
	console.log("I am Here" + id);
		res.render('http://localhost:8080/GrailsGumballMachineVer2/gumballMachine/index/?id');	
	};

	
	exports.turncrank= function(req,res){
		
		var id = req.params.id; 
		console.log("I am Here" + id);
			res.render('http://localhost:8080/GrailsGumballMachineVer2/gumballMachine/index/?id');	
		};
