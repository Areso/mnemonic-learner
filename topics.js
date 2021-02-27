topics = [];
topics.push(["Irregular verbs", "irregular_verbs"]);
topics.push(["Prepositions", "prepositions"]);
function load() {
	topicSelector = document.getElementById("topicSelector");
	for(var j in topics)	{
		topicSelector.add(new Option(topics[j][0],topics[j][1]));
	}
}
window.onload = load;   
