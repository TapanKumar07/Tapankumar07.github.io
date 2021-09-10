
var people=new Array();

people[0]="Yaakov";
people[1]="John";
people[2]="Jen";
people[3]="jason";
people[4]="paul";
people[5]="frank";
people[6]="larry";
people[7]="paula";
people[8]="laura";
people[9]="jim";


for (var i = 0; i < people.length; i++) {
	if(people[i].charAt(0)==='J'|| people[i].charAt(0)==='j')
          console.log(" Goodbye " + people[i]);
	else
	   console.log(" Hello " + people[i]);
}