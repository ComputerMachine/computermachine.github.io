$(function() {
    var data = [{"Season": "01", "Episode": "13", "Name": "Datalore", "Samples": ["samples/s01/13/1.ogg", "samples/s01/13/2.ogg", "samples/s01/13/3.ogg"]}, {"Season": "01", "Episode": "01&02", "Name": "Encounter at Farpoint", "Samples": ["samples/s01/01&02/1.ogg", "samples/s01/01&02/2.ogg", "samples/s01/01&02/3.ogg"]}, {"Season": "01", "Episode": "03", "Name": "The Naked Now", "Samples": ["samples/s01/03/1.ogg", "samples/s01/03/2.ogg", "samples/s01/03/3.ogg"]}, {"Season": "01", "Episode": "04", "Name": "Code of Honor", "Samples": ["samples/s01/04/1.ogg", "samples/s01/04/2.ogg", "samples/s01/04/3.ogg"]}, {"Season": "01", "Episode": "05", "Name": "The Last Outpost", "Samples": ["samples/s01/05/1.ogg", "samples/s01/05/2.ogg", "samples/s01/05/3.ogg"]}, {"Season": "01", "Episode": "06", "Name": "Where No One Has Gone Before", "Samples": ["samples/s01/06/1.ogg", "samples/s01/06/2.ogg", "samples/s01/06/3.ogg"]}, {"Season": "01", "Episode": "07", "Name": "Lonely Among Us", "Samples": ["samples/s01/07/1.ogg", "samples/s01/07/2.ogg", "samples/s01/07/3.ogg"]}, {"Season": "01", "Episode": "08", "Name": "Justice", "Samples": ["samples/s01/08/1.ogg", "samples/s01/08/2.ogg", "samples/s01/08/3.ogg"]}, {"Season": "01", "Episode": "09", "Name": "The Battle", "Samples": ["samples/s01/09/1.ogg", "samples/s01/09/2.ogg", "samples/s01/09/3.ogg"]}, {"Season": "01", "Episode": "10", "Name": "Hide and Q", "Samples": ["samples/s01/10/1.ogg", "samples/s01/10/2.ogg", "samples/s01/10/3.ogg"]}, {"Season": "01", "Episode": "11", "Name": "Haven", "Samples": ["samples/s01/11/1.ogg", "samples/s01/11/2.ogg", "samples/s01/11/3.ogg"]}, {"Season": "01", "Episode": "12", "Name": "The Big Goodbye", "Samples": ["samples/s01/12/1.ogg", "samples/s01/12/2.ogg", "samples/s01/12/3.ogg"]}, {"Season": "01", "Episode": "14", "Name": "Angel One", "Samples": ["samples/s01/14/1.ogg", "samples/s01/14/2.ogg", "samples/s01/14/3.ogg"]}, {"Season": "01", "Episode": "15", "Name": "11001001", "Samples": ["samples/s01/15/1.ogg", "samples/s01/15/2.ogg", "samples/s01/15/3.ogg"]}, {"Season": "01", "Episode": "16", "Name": "Too Short a Season", "Samples": ["samples/s01/16/1.ogg", "samples/s01/16/2.ogg", "samples/s01/16/3.ogg"]}, {"Season": "01", "Episode": "17", "Name": "When the Bough Breaks", "Samples": ["samples/s01/17/1.ogg", "samples/s01/17/2.ogg", "samples/s01/17/3.ogg"]}, {"Season": "01", "Episode": "18", "Name": "Home Soil", "Samples": ["samples/s01/18/1.ogg", "samples/s01/18/2.ogg", "samples/s01/18/3.ogg"]}, {"Season": "01", "Episode": "19", "Name": "Coming of Age", "Samples": ["samples/s01/19/1.ogg", "samples/s01/19/2.ogg", "samples/s01/19/3.ogg"]}, {"Season": "01", "Episode": "20", "Name": "Heart of Glory", "Samples": ["samples/s01/20/1.ogg", "samples/s01/20/2.ogg", "samples/s01/20/3.ogg"]}, {"Season": "01", "Episode": "21", "Name": "The Arsenal of Freedom", "Samples": ["samples/s01/21/1.ogg", "samples/s01/21/2.ogg", "samples/s01/21/3.ogg"]}, {"Season": "01", "Episode": "22", "Name": "Symbiosis", "Samples": ["samples/s01/22/1.ogg", "samples/s01/22/2.ogg", "samples/s01/22/3.ogg"]}, {"Season": "01", "Episode": "23", "Name": "Skin of Evil", "Samples": ["samples/s01/23/1.ogg", "samples/s01/23/2.ogg", "samples/s01/23/3.ogg"]}, {"Season": "01", "Episode": "24", "Name": "We'll Always Have Paris", "Samples": ["samples/s01/24/1.ogg", "samples/s01/24/2.ogg", "samples/s01/24/3.ogg"]}, {"Season": "01", "Episode": "25", "Name": "Conspiracy", "Samples": ["samples/s01/25/1.ogg", "samples/s01/25/2.ogg", "samples/s01/25/3.ogg"]}, {"Season": "01", "Episode": "26", "Name": "The Neutral Zone", "Samples": ["samples/s01/26/1.ogg", "samples/s01/26/2.ogg", "samples/s01/26/3.ogg"]}, {"Season": "02", "Episode": "11", "Name": "Contagion", "Samples": ["samples/s02/11/1.ogg", "samples/s02/11/2.ogg", "samples/s02/11/3.ogg"]}, {"Season": "02", "Episode": "01", "Name": "The Child", "Samples": ["samples/s02/01/1.ogg", "samples/s02/01/2.ogg", "samples/s02/01/3.ogg"]}, {"Season": "02", "Episode": "02", "Name": "Where Silence Has Lease", "Samples": ["samples/s02/02/1.ogg", "samples/s02/02/2.ogg", "samples/s02/02/3.ogg"]}, {"Season": "02", "Episode": "03", "Name": "Elementary, Dear Data", "Samples": ["samples/s02/03/1.ogg", "samples/s02/03/2.ogg", "samples/s02/03/3.ogg"]}, {"Season": "02", "Episode": "04", "Name": "The Outrageous Okona", "Samples": ["samples/s02/04/1.ogg", "samples/s02/04/2.ogg", "samples/s02/04/3.ogg"]}, {"Season": "02", "Episode": "05", "Name": "Loud As A Whisper", "Samples": ["samples/s02/05/1.ogg", "samples/s02/05/2.ogg", "samples/s02/05/3.ogg"]}, {"Season": "02", "Episode": "06", "Name": "The Schizoid Man", "Samples": ["samples/s02/06/1.ogg", "samples/s02/06/2.ogg", "samples/s02/06/3.ogg"]}, {"Season": "02", "Episode": "07", "Name": "Unnatural Selection", "Samples": ["samples/s02/07/1.ogg", "samples/s02/07/2.ogg", "samples/s02/07/3.ogg"]}, {"Season": "02", "Episode": "08", "Name": "A Matter Of Honor", "Samples": ["samples/s02/08/1.ogg", "samples/s02/08/2.ogg", "samples/s02/08/3.ogg"]}, {"Season": "02", "Episode": "09", "Name": "The Measure Of A Man", "Samples": ["samples/s02/09/1.ogg", "samples/s02/09/2.ogg", "samples/s02/09/3.ogg"]}, {"Season": "02", "Episode": "10", "Name": "The Dauphin", "Samples": ["samples/s02/10/1.ogg", "samples/s02/10/2.ogg", "samples/s02/10/3.ogg"]}, {"Season": "02", "Episode": "12", "Name": "The Royale", "Samples": ["samples/s02/12/1.ogg", "samples/s02/12/2.ogg", "samples/s02/12/3.ogg"]}, {"Season": "02", "Episode": "13", "Name": "Time Squared", "Samples": ["samples/s02/13/1.ogg", "samples/s02/13/2.ogg", "samples/s02/13/3.ogg"]}, {"Season": "02", "Episode": "14", "Name": "The Icarus Factor", "Samples": ["samples/s02/14/1.ogg", "samples/s02/14/2.ogg", "samples/s02/14/3.ogg"]}, {"Season": "02", "Episode": "15", "Name": "Pen Pals", "Samples": ["samples/s02/15/1.ogg", "samples/s02/15/2.ogg", "samples/s02/15/3.ogg"]}, {"Season": "02", "Episode": "16", "Name": "Q Who", "Samples": ["samples/s02/16/1.ogg", "samples/s02/16/2.ogg", "samples/s02/16/3.ogg"]}, {"Season": "02", "Episode": "17", "Name": "Samaritan Snare", "Samples": ["samples/s02/17/1.ogg", "samples/s02/17/2.ogg", "samples/s02/17/3.ogg"]}, {"Season": "02", "Episode": "18", "Name": "Up The Long Ladder", "Samples": ["samples/s02/18/1.ogg", "samples/s02/18/2.ogg", "samples/s02/18/3.ogg"]}, {"Season": "02", "Episode": "19", "Name": "Manhunt", "Samples": ["samples/s02/19/1.ogg", "samples/s02/19/2.ogg", "samples/s02/19/3.ogg"]}, {"Season": "02", "Episode": "20", "Name": "The Emissary", "Samples": ["samples/s02/20/1.ogg", "samples/s02/20/2.ogg", "samples/s02/20/3.ogg"]}, {"Season": "02", "Episode": "21", "Name": "Peak Performance", "Samples": ["samples/s02/21/1.ogg", "samples/s02/21/2.ogg", "samples/s02/21/3.ogg"]}, {"Season": "02", "Episode": "22", "Name": "Shades of Gray", "Samples": ["samples/s02/22/1.ogg", "samples/s02/22/2.ogg", "samples/s02/22/3.ogg"]}, {"Season": "03", "Episode": "12", "Name": "The High Ground", "Samples": ["samples/s03/12/1.ogg", "samples/s03/12/2.ogg", "samples/s03/12/3.ogg"]}, {"Season": "03", "Episode": "01", "Name": "Evolution", "Samples": ["samples/s03/01/1.ogg", "samples/s03/01/2.ogg", "samples/s03/01/3.ogg"]}, {"Season": "03", "Episode": "02", "Name": "The Ensigns of Command", "Samples": ["samples/s03/02/1.ogg", "samples/s03/02/2.ogg", "samples/s03/02/3.ogg"]}, {"Season": "03", "Episode": "03", "Name": "The Survivors", "Samples": ["samples/s03/03/1.ogg", "samples/s03/03/2.ogg", "samples/s03/03/3.ogg"]}, {"Season": "03", "Episode": "04", "Name": "Who Watches the Watchers", "Samples": ["samples/s03/04/1.ogg", "samples/s03/04/2.ogg", "samples/s03/04/3.ogg"]}, {"Season": "03", "Episode": "05", "Name": "The Bonding", "Samples": ["samples/s03/05/1.ogg", "samples/s03/05/2.ogg", "samples/s03/05/3.ogg"]}, {"Season": "03", "Episode": "06", "Name": "Booby Trap", "Samples": ["samples/s03/06/1.ogg", "samples/s03/06/2.ogg", "samples/s03/06/3.ogg"]}, {"Season": "03", "Episode": "07", "Name": "The Enemy", "Samples": ["samples/s03/07/1.ogg", "samples/s03/07/2.ogg", "samples/s03/07/3.ogg"]}, {"Season": "03", "Episode": "08", "Name": "The Price", "Samples": ["samples/s03/08/1.ogg", "samples/s03/08/2.ogg", "samples/s03/08/3.ogg"]}, {"Season": "03", "Episode": "09", "Name": "The Vengeance Factor", "Samples": ["samples/s03/09/1.ogg", "samples/s03/09/2.ogg", "samples/s03/09/3.ogg"]}, {"Season": "03", "Episode": "10", "Name": "The Defector", "Samples": ["samples/s03/10/1.ogg", "samples/s03/10/2.ogg", "samples/s03/10/3.ogg"]}, {"Season": "03", "Episode": "11", "Name": "The Hunted", "Samples": ["samples/s03/11/1.ogg", "samples/s03/11/2.ogg", "samples/s03/11/3.ogg"]}, {"Season": "03", "Episode": "13", "Name": "D\u00e9j\u00e0 Q", "Samples": ["samples/s03/13/1.ogg", "samples/s03/13/2.ogg", "samples/s03/13/3.ogg"]}, {"Season": "03", "Episode": "14", "Name": "A Matter of Perspective", "Samples": ["samples/s03/14/1.ogg", "samples/s03/14/2.ogg", "samples/s03/14/3.ogg"]}, {"Season": "03", "Episode": "15", "Name": "Yesterday's Enterprise", "Samples": ["samples/s03/15/1.ogg", "samples/s03/15/2.ogg", "samples/s03/15/3.ogg"]}, {"Season": "03", "Episode": "16", "Name": "The Offspring", "Samples": ["samples/s03/16/1.ogg", "samples/s03/16/2.ogg", "samples/s03/16/3.ogg"]}, {"Season": "03", "Episode": "17", "Name": "Sins of the Father", "Samples": ["samples/s03/17/1.ogg", "samples/s03/17/2.ogg", "samples/s03/17/3.ogg"]}, {"Season": "03", "Episode": "18", "Name": "Allegiance", "Samples": ["samples/s03/18/1.ogg", "samples/s03/18/2.ogg", "samples/s03/18/3.ogg"]}, {"Season": "03", "Episode": "19", "Name": "Captain's Holiday", "Samples": ["samples/s03/19/1.ogg", "samples/s03/19/2.ogg", "samples/s03/19/3.ogg"]}, {"Season": "03", "Episode": "20", "Name": "Tin Man", "Samples": ["samples/s03/20/1.ogg", "samples/s03/20/2.ogg", "samples/s03/20/3.ogg"]}, {"Season": "03", "Episode": "21", "Name": "Hollow Pursuits", "Samples": ["samples/s03/21/1.ogg", "samples/s03/21/2.ogg", "samples/s03/21/3.ogg"]}, {"Season": "03", "Episode": "22", "Name": "The Most Toys", "Samples": ["samples/s03/22/1.ogg", "samples/s03/22/2.ogg", "samples/s03/22/3.ogg"]}, {"Season": "03", "Episode": "23", "Name": "Sarek", "Samples": ["samples/s03/23/1.ogg", "samples/s03/23/2.ogg", "samples/s03/23/3.ogg"]}, {"Season": "03", "Episode": "24", "Name": "M\u00e9nage \u00e0 Troi", "Samples": ["samples/s03/24/1.ogg", "samples/s03/24/2.ogg", "samples/s03/24/3.ogg"]}, {"Season": "03", "Episode": "25", "Name": "Transfigurations", "Samples": ["samples/s03/25/1.ogg", "samples/s03/25/2.ogg", "samples/s03/25/3.ogg"]}, {"Season": "03", "Episode": "26-S04&01", "Name": "The Best of Both Worlds", "Samples": ["samples/s03/26-S04&01/1.ogg", "samples/s03/26-S04&01/2.ogg", "samples/s03/26-S04&01/3.ogg"]}, {"Season": "04", "Episode": "02", "Name": "Family", "Samples": ["samples/s04/02/1.ogg", "samples/s04/02/2.ogg", "samples/s04/02/3.ogg"]}, {"Season": "04", "Episode": "03", "Name": "Brothers", "Samples": ["samples/s04/03/1.ogg", "samples/s04/03/2.ogg", "samples/s04/03/3.ogg"]}, {"Season": "04", "Episode": "04", "Name": "Suddenly Human", "Samples": ["samples/s04/04/1.ogg", "samples/s04/04/2.ogg", "samples/s04/04/3.ogg"]}, {"Season": "04", "Episode": "05", "Name": "Remember Me", "Samples": ["samples/s04/05/1.ogg", "samples/s04/05/2.ogg", "samples/s04/05/3.ogg"]}, {"Season": "04", "Episode": "06", "Name": "Legacy", "Samples": ["samples/s04/06/1.ogg", "samples/s04/06/2.ogg", "samples/s04/06/3.ogg"]}, {"Season": "04", "Episode": "07", "Name": "Reunion", "Samples": ["samples/s04/07/1.ogg", "samples/s04/07/2.ogg", "samples/s04/07/3.ogg"]}, {"Season": "04", "Episode": "08", "Name": "Future Imperfect", "Samples": ["samples/s04/08/1.ogg", "samples/s04/08/2.ogg", "samples/s04/08/3.ogg"]}, {"Season": "04", "Episode": "09", "Name": "Final Mission", "Samples": ["samples/s04/09/1.ogg", "samples/s04/09/2.ogg", "samples/s04/09/3.ogg"]}, {"Season": "04", "Episode": "10", "Name": "The Loss", "Samples": ["samples/s04/10/1.ogg", "samples/s04/10/2.ogg", "samples/s04/10/3.ogg"]}, {"Season": "04", "Episode": "11", "Name": "Data's Day", "Samples": ["samples/s04/11/1.ogg", "samples/s04/11/2.ogg", "samples/s04/11/3.ogg"]}, {"Season": "04", "Episode": "12", "Name": "The Wounded", "Samples": ["samples/s04/12/1.ogg", "samples/s04/12/2.ogg", "samples/s04/12/3.ogg"]}, {"Season": "04", "Episode": "13", "Name": "Devil's Due", "Samples": ["samples/s04/13/1.ogg", "samples/s04/13/2.ogg", "samples/s04/13/3.ogg"]}, {"Season": "04", "Episode": "14", "Name": "Clues", "Samples": ["samples/s04/14/1.ogg", "samples/s04/14/2.ogg", "samples/s04/14/3.ogg"]}, {"Season": "04", "Episode": "15", "Name": "First Contact", "Samples": ["samples/s04/15/1.ogg", "samples/s04/15/2.ogg", "samples/s04/15/3.ogg"]}, {"Season": "04", "Episode": "16", "Name": "Galaxy's Child", "Samples": ["samples/s04/16/1.ogg", "samples/s04/16/2.ogg", "samples/s04/16/3.ogg"]}, {"Season": "04", "Episode": "17", "Name": "Night Terrors", "Samples": ["samples/s04/17/1.ogg", "samples/s04/17/2.ogg", "samples/s04/17/3.ogg"]}, {"Season": "04", "Episode": "18", "Name": "Identity Crisis", "Samples": ["samples/s04/18/1.ogg", "samples/s04/18/2.ogg", "samples/s04/18/3.ogg"]}, {"Season": "04", "Episode": "19", "Name": "The Nth Degree", "Samples": ["samples/s04/19/1.ogg", "samples/s04/19/2.ogg", "samples/s04/19/3.ogg"]}, {"Season": "04", "Episode": "20", "Name": "Qpid", "Samples": ["samples/s04/20/1.ogg", "samples/s04/20/2.ogg", "samples/s04/20/3.ogg"]}, {"Season": "04", "Episode": "21", "Name": "The Drumhead", "Samples": ["samples/s04/21/1.ogg", "samples/s04/21/2.ogg", "samples/s04/21/3.ogg"]}, {"Season": "04", "Episode": "22", "Name": "Half a Life", "Samples": ["samples/s04/22/1.ogg", "samples/s04/22/2.ogg", "samples/s04/22/3.ogg"]}, {"Season": "04", "Episode": "23", "Name": "The Host", "Samples": ["samples/s04/23/1.ogg", "samples/s04/23/2.ogg", "samples/s04/23/3.ogg"]}, {"Season": "04", "Episode": "24", "Name": "The Mind's Eye", "Samples": ["samples/s04/24/1.ogg", "samples/s04/24/2.ogg", "samples/s04/24/3.ogg"]}, {"Season": "04", "Episode": "25", "Name": "In Theory", "Samples": ["samples/s04/25/1.ogg", "samples/s04/25/2.ogg", "samples/s04/25/3.ogg"]}, {"Season": "04", "Episode": "26", "Name": "Redemption Part I", "Samples": ["samples/s04/26/1.ogg", "samples/s04/26/2.ogg", "samples/s04/26/3.ogg"]}, {"Season": "05", "Episode": "13", "Name": "The Masterpiece Society", "Samples": ["samples/s05/13/1.ogg", "samples/s05/13/2.ogg", "samples/s05/13/3.ogg"]}, {"Season": "05", "Episode": "01", "Name": "Redemption Part II", "Samples": ["samples/s05/01/1.ogg", "samples/s05/01/2.ogg", "samples/s05/01/3.ogg"]}, {"Season": "05", "Episode": "02", "Name": "Darmok", "Samples": ["samples/s05/02/1.ogg", "samples/s05/02/2.ogg", "samples/s05/02/3.ogg"]}, {"Season": "05", "Episode": "03", "Name": "Ensign Ro", "Samples": ["samples/s05/03/1.ogg", "samples/s05/03/2.ogg", "samples/s05/03/3.ogg"]}, {"Season": "05", "Episode": "04", "Name": "Silicon Avatar", "Samples": ["samples/s05/04/1.ogg", "samples/s05/04/2.ogg", "samples/s05/04/3.ogg"]}, {"Season": "05", "Episode": "05", "Name": "Disaster", "Samples": ["samples/s05/05/1.ogg", "samples/s05/05/2.ogg", "samples/s05/05/3.ogg"]}, {"Season": "05", "Episode": "06", "Name": "The Game", "Samples": ["samples/s05/06/1.ogg", "samples/s05/06/2.ogg", "samples/s05/06/3.ogg"]}, {"Season": "05", "Episode": "07", "Name": "Unification I", "Samples": ["samples/s05/07/1.ogg", "samples/s05/07/2.ogg", "samples/s05/07/3.ogg"]}, {"Season": "05", "Episode": "08", "Name": "Unification II", "Samples": ["samples/s05/08/1.ogg", "samples/s05/08/2.ogg", "samples/s05/08/3.ogg"]}, {"Season": "05", "Episode": "09", "Name": "A Matter of Time", "Samples": ["samples/s05/09/1.ogg", "samples/s05/09/2.ogg", "samples/s05/09/3.ogg"]}, {"Season": "05", "Episode": "10", "Name": "New Ground", "Samples": ["samples/s05/10/1.ogg", "samples/s05/10/2.ogg", "samples/s05/10/3.ogg"]}, {"Season": "05", "Episode": "11", "Name": "Hero Worship", "Samples": ["samples/s05/11/1.ogg", "samples/s05/11/2.ogg", "samples/s05/11/3.ogg"]}, {"Season": "05", "Episode": "12", "Name": "Violations", "Samples": ["samples/s05/12/1.ogg", "samples/s05/12/2.ogg", "samples/s05/12/3.ogg"]}, {"Season": "05", "Episode": "14", "Name": "Conundrum", "Samples": ["samples/s05/14/1.ogg", "samples/s05/14/2.ogg", "samples/s05/14/3.ogg"]}, {"Season": "05", "Episode": "15", "Name": "Power Play", "Samples": ["samples/s05/15/1.ogg", "samples/s05/15/2.ogg", "samples/s05/15/3.ogg"]}, {"Season": "05", "Episode": "16", "Name": "Ethics", "Samples": ["samples/s05/16/1.ogg", "samples/s05/16/2.ogg", "samples/s05/16/3.ogg"]}, {"Season": "05", "Episode": "17", "Name": "The Outcast", "Samples": ["samples/s05/17/1.ogg", "samples/s05/17/2.ogg", "samples/s05/17/3.ogg"]}, {"Season": "05", "Episode": "18", "Name": "Cause and Effect", "Samples": ["samples/s05/18/1.ogg", "samples/s05/18/2.ogg", "samples/s05/18/3.ogg"]}, {"Season": "05", "Episode": "19", "Name": "The First Duty", "Samples": ["samples/s05/19/1.ogg", "samples/s05/19/2.ogg", "samples/s05/19/3.ogg"]}, {"Season": "05", "Episode": "20", "Name": "Cost of Living", "Samples": ["samples/s05/20/1.ogg", "samples/s05/20/2.ogg", "samples/s05/20/3.ogg"]}, {"Season": "05", "Episode": "21", "Name": "The Perfect Mate", "Samples": ["samples/s05/21/1.ogg", "samples/s05/21/2.ogg", "samples/s05/21/3.ogg"]}, {"Season": "05", "Episode": "22", "Name": "Imaginary Friend", "Samples": ["samples/s05/22/1.ogg", "samples/s05/22/2.ogg", "samples/s05/22/3.ogg"]}, {"Season": "05", "Episode": "23", "Name": "I Borg", "Samples": ["samples/s05/23/1.ogg", "samples/s05/23/2.ogg", "samples/s05/23/3.ogg"]}, {"Season": "05", "Episode": "24", "Name": "The Next Phase", "Samples": ["samples/s05/24/1.ogg", "samples/s05/24/2.ogg", "samples/s05/24/3.ogg"]}, {"Season": "05", "Episode": "25", "Name": "The Inner Light", "Samples": ["samples/s05/25/1.ogg", "samples/s05/25/2.ogg", "samples/s05/25/3.ogg"]}, {"Season": "05", "Episode": "26", "Name": "Times Arrow", "Samples": ["samples/s05/26/1.ogg", "samples/s05/26/2.ogg", "samples/s05/26/3.ogg"]}, {"Season": "06", "Episode": "12", "Name": "Ship in a Bottle", "Samples": ["samples/s06/12/1.ogg", "samples/s06/12/2.ogg", "samples/s06/12/3.ogg"]}, {"Season": "06", "Episode": "01", "Name": "Times Arrow Part II", "Samples": ["samples/s06/01/1.ogg", "samples/s06/01/2.ogg", "samples/s06/01/3.ogg"]}, {"Season": "06", "Episode": "02", "Name": "Realm of Fear", "Samples": ["samples/s06/02/1.ogg", "samples/s06/02/2.ogg", "samples/s06/02/3.ogg"]}, {"Season": "06", "Episode": "03", "Name": "Man of the People", "Samples": ["samples/s06/03/1.ogg", "samples/s06/03/2.ogg", "samples/s06/03/3.ogg"]}, {"Season": "06", "Episode": "04", "Name": "Relics", "Samples": ["samples/s06/04/1.ogg", "samples/s06/04/2.ogg", "samples/s06/04/3.ogg"]}, {"Season": "06", "Episode": "05", "Name": "Schisms", "Samples": ["samples/s06/05/1.ogg", "samples/s06/05/2.ogg", "samples/s06/05/3.ogg"]}, {"Season": "06", "Episode": "06", "Name": "True Q", "Samples": ["samples/s06/06/1.ogg", "samples/s06/06/2.ogg", "samples/s06/06/3.ogg"]}, {"Season": "06", "Episode": "07", "Name": "Rascals", "Samples": ["samples/s06/07/1.ogg", "samples/s06/07/2.ogg", "samples/s06/07/3.ogg"]}, {"Season": "06", "Episode": "08", "Name": "A Fistful of Datas", "Samples": ["samples/s06/08/1.ogg", "samples/s06/08/2.ogg", "samples/s06/08/3.ogg"]}, {"Season": "06", "Episode": "09", "Name": "The Quality of Life", "Samples": ["samples/s06/09/1.ogg", "samples/s06/09/2.ogg", "samples/s06/09/3.ogg"]}, {"Season": "06", "Episode": "10", "Name": "Chain of Command Part I", "Samples": ["samples/s06/10/1.ogg", "samples/s06/10/2.ogg", "samples/s06/10/3.ogg"]}, {"Season": "06", "Episode": "11", "Name": "Chain of Command Part II", "Samples": ["samples/s06/11/1.ogg", "samples/s06/11/2.ogg", "samples/s06/11/3.ogg"]}, {"Season": "06", "Episode": "13", "Name": "Aquiel", "Samples": ["samples/s06/13/1.ogg", "samples/s06/13/2.ogg", "samples/s06/13/3.ogg"]}, {"Season": "06", "Episode": "14", "Name": "Face of the Enemy", "Samples": ["samples/s06/14/1.ogg", "samples/s06/14/2.ogg", "samples/s06/14/3.ogg"]}, {"Season": "06", "Episode": "15", "Name": "Tapestry", "Samples": ["samples/s06/15/1.ogg", "samples/s06/15/2.ogg", "samples/s06/15/3.ogg"]}, {"Season": "06", "Episode": "16", "Name": "Birthright Part I", "Samples": ["samples/s06/16/1.ogg", "samples/s06/16/2.ogg", "samples/s06/16/3.ogg"]}, {"Season": "06", "Episode": "17", "Name": "Birthright Part II", "Samples": ["samples/s06/17/1.ogg", "samples/s06/17/2.ogg", "samples/s06/17/3.ogg"]}, {"Season": "06", "Episode": "18", "Name": "Starship Mine", "Samples": ["samples/s06/18/1.ogg", "samples/s06/18/2.ogg", "samples/s06/18/3.ogg"]}, {"Season": "06", "Episode": "19", "Name": "Lessons", "Samples": ["samples/s06/19/1.ogg", "samples/s06/19/2.ogg", "samples/s06/19/3.ogg"]}, {"Season": "06", "Episode": "20", "Name": "The Chase", "Samples": ["samples/s06/20/1.ogg", "samples/s06/20/2.ogg", "samples/s06/20/3.ogg"]}, {"Season": "06", "Episode": "21", "Name": "Frame of Mind", "Samples": ["samples/s06/21/1.ogg", "samples/s06/21/2.ogg", "samples/s06/21/3.ogg"]}, {"Season": "06", "Episode": "22", "Name": "Suspicions", "Samples": ["samples/s06/22/1.ogg", "samples/s06/22/2.ogg", "samples/s06/22/3.ogg"]}, {"Season": "06", "Episode": "23", "Name": "Rightful Heir", "Samples": ["samples/s06/23/1.ogg", "samples/s06/23/2.ogg", "samples/s06/23/3.ogg"]}, {"Season": "06", "Episode": "24", "Name": "Second Chances", "Samples": ["samples/s06/24/1.ogg", "samples/s06/24/2.ogg", "samples/s06/24/3.ogg"]}, {"Season": "06", "Episode": "25", "Name": "Timescape", "Samples": ["samples/s06/25/1.ogg", "samples/s06/25/2.ogg", "samples/s06/25/3.ogg"]}, {"Season": "06", "Episode": "26", "Name": "Descent", "Samples": ["samples/s06/26/1.ogg", "samples/s06/26/2.ogg", "samples/s06/26/3.ogg"]}, {"Season": "07", "Episode": "13", "Name": "Homeward", "Samples": ["samples/s07/13/1.ogg", "samples/s07/13/2.ogg", "samples/s07/13/3.ogg"]}, {"Season": "07", "Episode": "01", "Name": "Descent Part II", "Samples": ["samples/s07/01/1.ogg", "samples/s07/01/2.ogg", "samples/s07/01/3.ogg"]}, {"Season": "07", "Episode": "02", "Name": "Liaisons", "Samples": ["samples/s07/02/1.ogg", "samples/s07/02/2.ogg", "samples/s07/02/3.ogg"]}, {"Season": "07", "Episode": "03", "Name": "Interface", "Samples": ["samples/s07/03/1.ogg", "samples/s07/03/2.ogg", "samples/s07/03/3.ogg"]}, {"Season": "07", "Episode": "04", "Name": "Gambit Part I", "Samples": ["samples/s07/04/1.ogg", "samples/s07/04/2.ogg", "samples/s07/04/3.ogg"]}, {"Season": "07", "Episode": "05", "Name": "Gambit Part II", "Samples": ["samples/s07/05/1.ogg", "samples/s07/05/2.ogg", "samples/s07/05/3.ogg"]}, {"Season": "07", "Episode": "06", "Name": "Phantasms", "Samples": ["samples/s07/06/1.ogg", "samples/s07/06/2.ogg", "samples/s07/06/3.ogg"]}, {"Season": "07", "Episode": "07", "Name": "Dark Page", "Samples": ["samples/s07/07/1.ogg", "samples/s07/07/2.ogg", "samples/s07/07/3.ogg"]}, {"Season": "07", "Episode": "08", "Name": "Attached", "Samples": ["samples/s07/08/1.ogg", "samples/s07/08/2.ogg", "samples/s07/08/3.ogg"]}, {"Season": "07", "Episode": "09", "Name": "Force of Nature", "Samples": ["samples/s07/09/1.ogg", "samples/s07/09/2.ogg", "samples/s07/09/3.ogg"]}, {"Season": "07", "Episode": "10", "Name": "Inheritance", "Samples": ["samples/s07/10/1.ogg", "samples/s07/10/2.ogg", "samples/s07/10/3.ogg"]}, {"Season": "07", "Episode": "11", "Name": "Parallels", "Samples": ["samples/s07/11/1.ogg", "samples/s07/11/2.ogg", "samples/s07/11/3.ogg"]}, {"Season": "07", "Episode": "12", "Name": "The Pegasus", "Samples": ["samples/s07/12/1.ogg", "samples/s07/12/2.ogg", "samples/s07/12/3.ogg"]}, {"Season": "07", "Episode": "14", "Name": "Sub Rosa", "Samples": ["samples/s07/14/1.ogg", "samples/s07/14/2.ogg", "samples/s07/14/3.ogg"]}, {"Season": "07", "Episode": "15", "Name": "Lower Decks", "Samples": ["samples/s07/15/1.ogg", "samples/s07/15/2.ogg", "samples/s07/15/3.ogg"]}, {"Season": "07", "Episode": "16", "Name": "Thine Own Self", "Samples": ["samples/s07/16/1.ogg", "samples/s07/16/2.ogg", "samples/s07/16/3.ogg"]}, {"Season": "07", "Episode": "17", "Name": "Masks", "Samples": ["samples/s07/17/1.ogg", "samples/s07/17/2.ogg", "samples/s07/17/3.ogg"]}, {"Season": "07", "Episode": "18", "Name": "Eye of the Beholder", "Samples": ["samples/s07/18/1.ogg", "samples/s07/18/2.ogg", "samples/s07/18/3.ogg"]}, {"Season": "07", "Episode": "19", "Name": "Genesis", "Samples": ["samples/s07/19/1.ogg", "samples/s07/19/2.ogg", "samples/s07/19/3.ogg"]}, {"Season": "07", "Episode": "20", "Name": "Journeys End", "Samples": ["samples/s07/20/1.ogg", "samples/s07/20/2.ogg", "samples/s07/20/3.ogg"]}, {"Season": "07", "Episode": "21", "Name": "Firstborn", "Samples": ["samples/s07/21/1.ogg", "samples/s07/21/2.ogg", "samples/s07/21/3.ogg"]}, {"Season": "07", "Episode": "22", "Name": "Bloodlines", "Samples": ["samples/s07/22/1.ogg", "samples/s07/22/2.ogg", "samples/s07/22/3.ogg"]}, {"Season": "07", "Episode": "23", "Name": "Emergence", "Samples": ["samples/s07/23/1.ogg", "samples/s07/23/2.ogg", "samples/s07/23/3.ogg"]}, {"Season": "07", "Episode": "24", "Name": "Preemptive Strike", "Samples": ["samples/s07/24/1.ogg", "samples/s07/24/2.ogg", "samples/s07/24/3.ogg"]}, {"Season": "07", "Episode": "25&26", "Name": "All Good Things", "Samples": ["samples/s07/25&26/1.ogg", "samples/s07/25&26/2.ogg", "samples/s07/25&26/3.ogg"]}];
    /*fetch("answers.json")
        .then(function(response) {
            var data = response.json();
        })
        .then(function(json) {
            console.log("ayep");
        });
    */
    let timer = 60;
    let points = 3;
    let sample = 0;
    let timerStarted = false;
    let timerId;
    let totalPoints = 0;
    let episode = data[174]; //var episode = data[Math.floor(Math.random() * data.length-1)];
    const audio = document.getElementById("audio");
    const maxPoints = data.length*3; 
    var correctAnswers = 0;
    
    let randomizeEpisode = function() {
        let previousEpisodeIndex = data.indexOf(episode);
        let newEpisodeIndex = Math.floor(Math.random() * data.length-1);
        if (newEpisodeIndex == previousEpisodeIndex) {
            randomizeEpisode();
        }
        return data[newEpisodeIndex];
    },
    resetAll = function() {
        sample = 0;
        timer = 60;
        points = 3;
        $("#answer").val("");  // reset answer
        $("#timer").text(60);  // reset timer
        $("#answer")  // remove answer classes
            .removeClass("is-valid")
            .removeClass("is-invalid");
        $("#clue").prop("disabled", false);  // re-enable clue button
        $("#points").text(points)  // reprint eligible points
        timerStarted = false;
        clearInterval(timerId);  // clear timer so user will have to re enter a title for it to re engage
    },
    startCountdown = function() {
        return setInterval(function() {
            switch (timer) {
                case 0:
                    points = 0;
                    nextEpisode();
                    resetAll();
                    startRound();
                    break;
                default:
                    timer--;
            }
            $("#points").text(points);
            $("#timer").text(timer);
        }, 1000);
    },
    normalize = function(s) {
        return s
            .toLowerCase()
            .normalize("NFD")  // split out accents
            .replace(/[\u0300-\u036f]/g, "")  // remove accents
            .replace(/[^\w\s]/g, "")  // remove anything that isn't a word character or a space
            .replace(/\s+/g, " ")  // replace one or more spaces with just one space
            .trim();  // remove space from start and end
            // .replace(/\b(part\s+)?(i+|\d+)$/, "")  // incase i have to regenerate the list
    },
    createChangelog = function(episode) {
        console.log("timer is: ", timer);
        const $li = $("<li>", {class: "list-group-item"})
        let $span =$("<span>", {class: "score"});
        let $p = $("<p>");
        switch(points) {
            case 3:
            case 2:
            case 1:
                $span.addClass("plus");
                $span.text("+" + points);
                $p.text("Correctly answered " + episode.Name);
                break;
            case 0:
                $span.text("0");
                $p.text("Couldn't figure out " + episode.Name);
                break;
        }
        return $li.append($span).append($p);
    },
    nextEpisode = function() {
        console.log("Moving to the next episode...");

        // update changelog
        $("#changelog").append(createChangelog(episode));

        // randomly choose the next episode
        episode = randomizeEpisode();

        resetAll(); // reset vars to their default value
        $("#audio").attr("src", episode.Samples[sample]);
    },
    startRound = function() {
        audio.play();
        timerStarted = true;
        timerId = startCountdown();
    }

    $("#maxPoints").text(maxPoints);
    $("#audio").attr("src", episode.Samples[sample]);

    /* user is moving to the next episode */
     $("#next").on("click", function() {
        console.log("Moving to next episode... ");
        points = 0;
        nextEpisode();
        startRound();
    });
    
    $("#audio").on("play", function() {
        if (!timerStarted) {
            timerStarted = true;
            timerId = startCountdown();
        }
        $("#audio").off("play");
    });

    // toggle game rules
    $("#rules-link").on("click", function(e) {
        e.preventDefault();
        $("#rules").toggle(500);
    });

    /* this event is fired if the user types into the input box */
    $("#answer").on("input", function() {
        console.log(episode);
        if (!timerStarted) {
            timerStarted = true;
            timerId = startCountdown();
        }

        if (normalize($(this).val()) === normalize(episode.Name)) {
            // you answered it correctly! hallejuah!
            $(this)
                .removeClass("is-invalid")
                .addClass("is-valid");

            totalPoints += points; $("#total").text(totalPoints);
            correctAnswers++; $("#correctAnswers").text(correctAnswers);

            // create a timeout so the user can actually see that he/her/them/shem was right
            setTimeout(function() {
                window.clearInterval(timerId);
                nextEpisode();
                startRound();
            }, 1000);
        }
        else {
            $(this).addClass("is-invalid");
        }
    });

    /* cant figure it out, so give em another clue */
                            
    $("#clue").on("click", function() {
        sample++; points--;
        $("#points").text(points);
        if (sample >= 2) {
            $(this).prop("disabled", true);
        };
        $("#audio").attr("src", episode.Samples[sample]);
        audio.play();
    });
});
