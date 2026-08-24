// SAT Verbatim vocabulary dataset
// Each entry: { id, word, definition, level, starred }
//   level:   'general' | 'medium' | 'hard' | 'expert' (medium/hard/expert are
//            tiered by source difficulty; general = untiered)
//   starred: true if this word has appeared on a real Digital SAT
const VOCAB_DATA = [
 {
  "id": 1,
  "word": "Copious",
  "definition": "Abundant in supply or quantity.",
  "level": "general",
  "starred": true
 },
 {
  "id": 2,
  "word": "Sporadic",
  "definition": "Occurring at irregular intervals or only in a few places; scattered or isolated.",
  "level": "general",
  "starred": true
 },
 {
  "id": 3,
  "word": "Transpose",
  "definition": "Cause (two or more things) to exchange places.",
  "level": "general",
  "starred": false
 },
 {
  "id": 4,
  "word": "Lament",
  "definition": "Express regret or disappointment about something.",
  "level": "general",
  "starred": true
 },
 {
  "id": 5,
  "word": "Entail",
  "definition": "Involve (something) as a necessary or inevitable part or consequence.",
  "level": "general",
  "starred": true
 },
 {
  "id": 6,
  "word": "Momentous",
  "definition": "Of great importance or significance, especially in having a bearing on future events.",
  "level": "general",
  "starred": true
 },
 {
  "id": 7,
  "word": "Pristine",
  "definition": "Clean and fresh as if new; spotless.",
  "level": "general",
  "starred": true
 },
 {
  "id": 8,
  "word": "Constrict",
  "definition": "Make narrower, especially by encircling pressure.",
  "level": "general",
  "starred": true
 },
 {
  "id": 9,
  "word": "Nebulous",
  "definition": "(Of a concept) vague or ill-defined.",
  "level": "general",
  "starred": true
 },
 {
  "id": 10,
  "word": "Refute",
  "definition": "To prove that it is false or incorrect; to deny or contradict.",
  "level": "general",
  "starred": true
 },
 {
  "id": 11,
  "word": "Corroborate",
  "definition": "To confirm or support a statement or theory by providing additional evidence or testimony.",
  "level": "general",
  "starred": true
 },
 {
  "id": 12,
  "word": "Scrupulous",
  "definition": "Being very careful, thorough, and attentive to detail, especially with regard to moral or ethical principles.",
  "level": "general",
  "starred": true
 },
 {
  "id": 13,
  "word": "Vindicate",
  "definition": "To clear someone or something of blame or suspicion, or to prove that something is right or justified.",
  "level": "general",
  "starred": true
 },
 {
  "id": 14,
  "word": "Preclude",
  "definition": "To prevent something from happening or being possible, usually by making it impossible or impractical.",
  "level": "general",
  "starred": true
 },
 {
  "id": 15,
  "word": "Repudiate",
  "definition": "To reject, disown, or deny something or someone.",
  "level": "general",
  "starred": true
 },
 {
  "id": 16,
  "word": "Mitigate",
  "definition": "To make something less severe, serious, or painful; to alleviate or reduce.",
  "level": "general",
  "starred": true
 },
 {
  "id": 17,
  "word": "Outsized",
  "definition": "Larger, greater, or more significant than what is considered typical or expected; unusually large, powerful, or influential.",
  "level": "general",
  "starred": true
 },
 {
  "id": 18,
  "word": "Palpable",
  "definition": "Easily felt, touched, or perceived; tangible or physical; noticeable or apparent.",
  "level": "general",
  "starred": true
 },
 {
  "id": 19,
  "word": "Evince",
  "definition": "To display or demonstrate something clearly or convincingly; to show evidence or proof of something, or of revealing a particular quality or trait.",
  "level": "general",
  "starred": true
 },
 {
  "id": 20,
  "word": "Accentuate",
  "definition": "To emphasize or highlight something, making it more prominent or noticeable.",
  "level": "general",
  "starred": true
 },
 {
  "id": 21,
  "word": "Counteract",
  "definition": "To oppose or neutralize the effects of something by taking contrary or opposing actions, to offset or balance out.",
  "level": "general",
  "starred": true
 },
 {
  "id": 22,
  "word": "Insuperable",
  "definition": "Impossible to overcome or surpass; insurmountable.",
  "level": "general",
  "starred": true
 },
 {
  "id": 23,
  "word": "Irreproachable",
  "definition": "Beyond criticism or fault, perfect or faultless in behavior or actions.",
  "level": "general",
  "starred": true
 },
 {
  "id": 24,
  "word": "Ineluctable",
  "definition": "Inevitable, unable to be avoided or escaped.",
  "level": "general",
  "starred": true
 },
 {
  "id": 25,
  "word": "Equivocal",
  "definition": "Open to interpretation, having multiple possible meanings, often intentionally vague or ambiguous.",
  "level": "general",
  "starred": true
 },
 {
  "id": 26,
  "word": "Inconsequential",
  "definition": "Lacking importance or significance, trivial or unimportant.",
  "level": "general",
  "starred": true
 },
 {
  "id": 27,
  "word": "Manifestations",
  "definition": "Visible or evident signs or expressions of something, the act of showing or making something clear or apparent.",
  "level": "general",
  "starred": true
 },
 {
  "id": 28,
  "word": "Obscure",
  "definition": "To make unclear, uncertain, or difficult to understand or perceive.",
  "level": "general",
  "starred": true
 },
 {
  "id": 29,
  "word": "Rectify",
  "definition": "To correct or make right, to remedy or resolve a problem or error.",
  "level": "general",
  "starred": true
 },
 {
  "id": 30,
  "word": "Ameliorate",
  "definition": "To make something better or improve a situation.",
  "level": "general",
  "starred": true
 },
 {
  "id": 31,
  "word": "Unattainable",
  "definition": "Impossible to achieve or reach.",
  "level": "general",
  "starred": true
 },
 {
  "id": 32,
  "word": "Superfluous",
  "definition": "Exceeding what is necessary or required; unnecessary.",
  "level": "general",
  "starred": true
 },
 {
  "id": 33,
  "word": "Amorphous",
  "definition": "Lacking a specific or defined shape; formless.",
  "level": "general",
  "starred": true
 },
 {
  "id": 34,
  "word": "Prohibitive",
  "definition": "Serving as an obstacle or barrier; preventing or discouraging something.",
  "level": "general",
  "starred": true
 },
 {
  "id": 35,
  "word": "Stipulate",
  "definition": "To specify or demand a requirement or condition as part of an agreement or contract.",
  "level": "general",
  "starred": true
 },
 {
  "id": 36,
  "word": "Induce",
  "definition": "To bring about or stimulate a particular response or action.",
  "level": "general",
  "starred": true
 },
 {
  "id": 37,
  "word": "Engender",
  "definition": "To cause or give rise to a particular feeling, situation, or condition.",
  "level": "general",
  "starred": true
 },
 {
  "id": 38,
  "word": "Supplant",
  "definition": "To replace or take the place of something or someone, often through competition or force.",
  "level": "general",
  "starred": true
 },
 {
  "id": 39,
  "word": "Austere",
  "definition": "Severe or strict in manner, attitude, or appearance; having a simple and plain style.",
  "level": "general",
  "starred": true
 },
 {
  "id": 40,
  "word": "Equitable",
  "definition": "Fair and just, ensuring that everyone is treated equally and without bias.",
  "level": "general",
  "starred": true
 },
 {
  "id": 41,
  "word": "Augment",
  "definition": "To make something greater by adding to it; to increase in size, quantity, or degree.",
  "level": "general",
  "starred": true
 },
 {
  "id": 42,
  "word": "Conventional",
  "definition": "Following established customs or practices; typical and ordinary.",
  "level": "general",
  "starred": false
 },
 {
  "id": 43,
  "word": "Idiosyncratic",
  "definition": "Peculiar or unique to an individual; having distinctive characteristics or habits.",
  "level": "general",
  "starred": true
 },
 {
  "id": 44,
  "word": "Coalesce",
  "definition": "To come together to form a single group or mass; to merge or unite.",
  "level": "general",
  "starred": true
 },
 {
  "id": 45,
  "word": "Synopsis",
  "definition": "A brief summary or overview of a longer text or event.",
  "level": "general",
  "starred": true
 },
 {
  "id": 46,
  "word": "Abundant",
  "definition": "Existing in large quantities; plentiful.",
  "level": "general",
  "starred": true
 },
 {
  "id": 47,
  "word": "Orthodox",
  "definition": "Adhering to established beliefs, customs, or practices, especially in a religious context.",
  "level": "general",
  "starred": true
 },
 {
  "id": 48,
  "word": "Reverberate",
  "definition": "To echo or resound repeatedly; to have a lasting impact or influence.",
  "level": "general",
  "starred": true
 },
 {
  "id": 49,
  "word": "Municipal",
  "definition": "Relating to the local government or administration of a city or town.",
  "level": "general",
  "starred": true
 },
 {
  "id": 50,
  "word": "Sway",
  "definition": "To have control or influence over someone or something; to cause to move gently back and forth.",
  "level": "general",
  "starred": true
 },
 {
  "id": 51,
  "word": "Spurious",
  "definition": "False or not genuine; lacking authenticity.",
  "level": "general",
  "starred": true
 },
 {
  "id": 52,
  "word": "Indulgently",
  "definition": "In a manner that is excessively lenient or permissive.",
  "level": "general",
  "starred": false
 },
 {
  "id": 53,
  "word": "Behold",
  "definition": "To see or observe something, often with a sense of wonder or amazement.",
  "level": "general",
  "starred": true
 },
 {
  "id": 54,
  "word": "Satiate",
  "definition": "To satisfy fully or to the point of excess.",
  "level": "general",
  "starred": true
 },
 {
  "id": 55,
  "word": "Idealize",
  "definition": "To regard or represent something as perfect or ideal, often unrealistically.",
  "level": "general",
  "starred": false
 },
 {
  "id": 56,
  "word": "Heterodox",
  "definition": "Contrary to or differing from established beliefs or accepted doctrines.",
  "level": "general",
  "starred": true
 },
 {
  "id": 57,
  "word": "Irrefutable",
  "definition": "Impossible to deny or disprove; indisputable.",
  "level": "general",
  "starred": true
 },
 {
  "id": 58,
  "word": "Venerate",
  "definition": "To regard with deep respect or reverence.",
  "level": "general",
  "starred": false
 },
 {
  "id": 59,
  "word": "Arduous",
  "definition": "Involving strenuous effort, hard work, or difficulty.",
  "level": "general",
  "starred": true
 },
 {
  "id": 60,
  "word": "Strenuous",
  "definition": "Requiring or characterized by great effort, energy, or activity.",
  "level": "general",
  "starred": true
 },
 {
  "id": 61,
  "word": "Unpretentious",
  "definition": "Modest and not trying to impress with a show of wealth or importance.",
  "level": "general",
  "starred": true
 },
 {
  "id": 62,
  "word": "Satiable",
  "definition": "Capable of being satisfied or fulfilled.",
  "level": "general",
  "starred": false
 },
 {
  "id": 63,
  "word": "Incongruous",
  "definition": "Not in harmony or not fitting within a particular context; out of place.",
  "level": "general",
  "starred": true
 },
 {
  "id": 64,
  "word": "Imposing",
  "definition": "Having a striking appearance or commanding presence.",
  "level": "general",
  "starred": true
 },
 {
  "id": 65,
  "word": "Venerable",
  "definition": "Worthy of respect or reverence due to age, wisdom, or character.",
  "level": "general",
  "starred": true
 },
 {
  "id": 66,
  "word": "Erratic",
  "definition": "Unpredictable; not following a regular pattern.",
  "level": "general",
  "starred": true
 },
 {
  "id": 67,
  "word": "Benevolent",
  "definition": "Kind and helpful; having or showing goodwill.",
  "level": "general",
  "starred": true
 },
 {
  "id": 68,
  "word": "Unequivocal",
  "definition": "Clear and certain; leaving no doubt.",
  "level": "general",
  "starred": false
 },
 {
  "id": 69,
  "word": "Superseded",
  "definition": "Replaced by something newer or better.",
  "level": "general",
  "starred": false
 },
 {
  "id": 70,
  "word": "Collaboration with",
  "definition": "Working together.",
  "level": "general",
  "starred": false
 },
 {
  "id": 71,
  "word": "Reserve",
  "definition": "Set aside for future use.",
  "level": "general",
  "starred": false
 },
 {
  "id": 72,
  "word": "Impede",
  "definition": "Hinder or obstruct.",
  "level": "general",
  "starred": true
 },
 {
  "id": 73,
  "word": "Deserve",
  "definition": "Earn or merit.",
  "level": "general",
  "starred": false
 },
 {
  "id": 74,
  "word": "Individualistic",
  "definition": "Independent and self-reliant; not conforming to a group.",
  "level": "general",
  "starred": false
 },
 {
  "id": 75,
  "word": "Comparison",
  "definition": "An examination of two or more things to see how they are alike or different.",
  "level": "general",
  "starred": false
 },
 {
  "id": 76,
  "word": "Homogeneous",
  "definition": "Having the same or similar characteristics throughout.",
  "level": "general",
  "starred": false
 },
 {
  "id": 77,
  "word": "Occupy",
  "definition": "Take possession or control of a place or thing.",
  "level": "general",
  "starred": true
 },
 {
  "id": 78,
  "word": "Interdependent",
  "definition": "Mutually reliant on each other; interconnected.",
  "level": "general",
  "starred": true
 },
 {
  "id": 79,
  "word": "Antagonist",
  "definition": "A person or thing that opposes or competes with another; an adversary.",
  "level": "general",
  "starred": true
 },
 {
  "id": 80,
  "word": "Yield",
  "definition": "To produce or provide, often as a result of an effort; to give way or surrender.",
  "level": "general",
  "starred": true
 },
 {
  "id": 81,
  "word": "Emulate",
  "definition": "To imitate or strive to equal or surpass, usually by closely copying the actions or qualities of someone or something.",
  "level": "general",
  "starred": true
 },
 {
  "id": 82,
  "word": "Scrutiny",
  "definition": "Critical observation or examination; careful and thorough inspection.",
  "level": "general",
  "starred": true
 },
 {
  "id": 83,
  "word": "Unyielding",
  "definition": "Not giving way or bending under pressure; rigid or inflexible.",
  "level": "general",
  "starred": true
 },
 {
  "id": 84,
  "word": "Convey",
  "definition": "To communicate or express in a way that is easily understood; to transport or transmit.",
  "level": "general",
  "starred": true
 },
 {
  "id": 85,
  "word": "Prestige",
  "definition": "The reputation or influence arising from success, achievement, or rank.",
  "level": "general",
  "starred": true
 },
 {
  "id": 86,
  "word": "Tenuous",
  "definition": "Thin or slender; lacking substance or significance; weak or fragile.",
  "level": "general",
  "starred": false
 },
 {
  "id": 87,
  "word": "Partite",
  "definition": "Divided into parts; made up of distinct sections.",
  "level": "general",
  "starred": true
 },
 {
  "id": 88,
  "word": "Ubiquitous",
  "definition": "Present, appearing, or found everywhere; widespread.",
  "level": "general",
  "starred": false
 },
 {
  "id": 89,
  "word": "Animosities toward",
  "definition": "Strong feelings of dislike or hostility directed towards someone or something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 90,
  "word": "Robust",
  "definition": "Strong, healthy, and vigorous; sturdy.",
  "level": "general",
  "starred": true
 },
 {
  "id": 91,
  "word": "Diverge",
  "definition": "To separate and go in different directions; to deviate from a common point.",
  "level": "general",
  "starred": false
 },
 {
  "id": 92,
  "word": "Familiarize",
  "definition": "To make oneself or someone else familiar with something; to acquaint.",
  "level": "general",
  "starred": false
 },
 {
  "id": 93,
  "word": "Replace",
  "definition": "To take the place of something or someone; to substitute.",
  "level": "general",
  "starred": false
 },
 {
  "id": 94,
  "word": "Observe",
  "definition": "To watch, notice, or perceive; to follow or adhere to.",
  "level": "general",
  "starred": false
 },
 {
  "id": 95,
  "word": "Reject",
  "definition": "To refuse to accept, consider, or agree with something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 96,
  "word": "Exactitude",
  "definition": "Precision and accuracy in details; the quality of being exact.",
  "level": "general",
  "starred": false
 },
 {
  "id": 97,
  "word": "Extrapolate",
  "definition": "To estimate or forecast based on existing data or trends.",
  "level": "general",
  "starred": true
 },
 {
  "id": 98,
  "word": "Startle",
  "definition": "To cause a sudden reaction of surprise or fright; to shock or alarm.",
  "level": "general",
  "starred": false
 },
 {
  "id": 99,
  "word": "Affinity for",
  "definition": "A natural liking or attraction towards something or someone.",
  "level": "general",
  "starred": false
 },
 {
  "id": 100,
  "word": "Partition",
  "definition": "To divide or separate into parts; a division or dividing wall.",
  "level": "general",
  "starred": true
 },
 {
  "id": 101,
  "word": "Untoward",
  "definition": "Unfavorable, inappropriate, or inconvenient.",
  "level": "general",
  "starred": true
 },
 {
  "id": 102,
  "word": "Manifest",
  "definition": "To show or demonstrate; to make evident or certain.",
  "level": "general",
  "starred": false
 },
 {
  "id": 103,
  "word": "Define",
  "definition": "To explain or describe the precise meaning of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 104,
  "word": "Visualize",
  "definition": "To form a mental image or picture of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 105,
  "word": "Similarities with",
  "definition": "Resemblances or commonalities between two or more things.",
  "level": "general",
  "starred": false
 },
 {
  "id": 106,
  "word": "Indication of",
  "definition": "A sign or signal that suggests the presence or existence of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 107,
  "word": "Gaining on",
  "definition": "Making progress or catching up with someone or something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 108,
  "word": "Fragile",
  "definition": "Easily broken or damaged; delicate.",
  "level": "general",
  "starred": false
 },
 {
  "id": 109,
  "word": "Reluctant",
  "definition": "Unwilling or hesitant; showing resistance.",
  "level": "general",
  "starred": true
 },
 {
  "id": 110,
  "word": "Hesitancy",
  "definition": "A state of indecision or unwillingness to act quickly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 111,
  "word": "Hew out",
  "definition": "To cut or shape by cutting, especially with an ax or chisel.",
  "level": "general",
  "starred": false
 },
 {
  "id": 112,
  "word": "To Vacate",
  "definition": "To leave or empty, especially a place or position.",
  "level": "general",
  "starred": false
 },
 {
  "id": 113,
  "word": "Conspicuous",
  "definition": "Easily noticeable or visible; attracting attention.",
  "level": "general",
  "starred": true
 },
 {
  "id": 114,
  "word": "Scrutinize",
  "definition": "To examine or inspect closely and thoroughly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 115,
  "word": "Aggrandize",
  "definition": "To increase the power, status, or wealth of something or someone, often in a gradual or exaggerated manner.",
  "level": "general",
  "starred": false
 },
 {
  "id": 116,
  "word": "Irreplaceable",
  "definition": "Impossible to replace or substitute, typically because of unique qualities or value.",
  "level": "general",
  "starred": false
 },
 {
  "id": 117,
  "word": "Anomalous",
  "definition": "Deviating from what is standard, normal, or expected; irregular or unusual.",
  "level": "general",
  "starred": false
 },
 {
  "id": 118,
  "word": "Unfounded",
  "definition": "Without a basis in fact or reason; groundless or unjustified.",
  "level": "general",
  "starred": false
 },
 {
  "id": 119,
  "word": "Blender",
  "definition": "A kitchen appliance used for mixing, puréeing, or emulsifying food and other substances.",
  "level": "general",
  "starred": false
 },
 {
  "id": 120,
  "word": "Affecting",
  "definition": "Having an influence on or causing a change in something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 121,
  "word": "Precursor",
  "definition": "Something that comes before and indicates the approach of another; a forerunner or predecessor.",
  "level": "general",
  "starred": false
 },
 {
  "id": 122,
  "word": "Bemused",
  "definition": "Confused or bewildered; deeply absorbed in thought.",
  "level": "general",
  "starred": false
 },
 {
  "id": 123,
  "word": "Calibrate",
  "definition": "To adjust or standardize a measuring instrument or device to ensure accuracy.",
  "level": "general",
  "starred": false
 },
 {
  "id": 124,
  "word": "Vitriolic",
  "definition": "Bitterly scathing or caustic in tone; filled with malice or spite.",
  "level": "general",
  "starred": false
 },
 {
  "id": 125,
  "word": "Biased",
  "definition": "Showing prejudice or favoritism toward a particular person, group, or idea.",
  "level": "general",
  "starred": false
 },
 {
  "id": 126,
  "word": "Dogmatic",
  "definition": "Asserting opinions or beliefs as if they were indisputable facts; characterized by stubbornly holding to one's own opinions.",
  "level": "general",
  "starred": false
 },
 {
  "id": 127,
  "word": "Serene",
  "definition": "Calm, peaceful, and untroubled; unaffected by disturbance.",
  "level": "general",
  "starred": false
 },
 {
  "id": 128,
  "word": "Banal",
  "definition": "Lacking originality or freshness; trite and commonplace.",
  "level": "general",
  "starred": false
 },
 {
  "id": 129,
  "word": "Implicit",
  "definition": "Implied or understood without being directly expressed; inherent or unquestioned.",
  "level": "general",
  "starred": false
 },
 {
  "id": 130,
  "word": "Corollary",
  "definition": "A direct or natural consequence or result; something that logically follows from another statement or fact.",
  "level": "general",
  "starred": false
 },
 {
  "id": 131,
  "word": "Coincided with",
  "definition": "Occurred at the same time as; happened simultaneously with.",
  "level": "general",
  "starred": false
 },
 {
  "id": 132,
  "word": "Legitimacy",
  "definition": "The quality or state of being legitimate or lawful; conformity to recognized principles or standards.",
  "level": "general",
  "starred": false
 },
 {
  "id": 133,
  "word": "Ineffectual",
  "definition": "Not producing the desired effect; lacking the ability to achieve the intended result.",
  "level": "general",
  "starred": false
 },
 {
  "id": 134,
  "word": "Ingenious",
  "definition": "Cleverly inventive or resourceful; marked by originality and creativity.",
  "level": "general",
  "starred": false
 },
 {
  "id": 135,
  "word": "Meticulous",
  "definition": "Showing great attention to detail; extremely careful and precise.",
  "level": "general",
  "starred": false
 },
 {
  "id": 136,
  "word": "Resonance",
  "definition": "The quality of evoking a strong feeling or response; the ability to resonate or vibrate in harmony with something else.",
  "level": "general",
  "starred": false
 },
 {
  "id": 137,
  "word": "Vigilance",
  "definition": "Alertness or watchfulness, especially in detecting and warding off danger or threats.",
  "level": "general",
  "starred": false
 },
 {
  "id": 138,
  "word": "Counterproductive",
  "definition": "Having the opposite of the desired effect; tending to hinder rather than promote progress or achievement.",
  "level": "general",
  "starred": false
 },
 {
  "id": 139,
  "word": "Discrepancy",
  "definition": "A lack of compatibility or similarity between two or more facts, figures, or statements; a difference or inconsistency.",
  "level": "general",
  "starred": false
 },
 {
  "id": 140,
  "word": "Dispute",
  "definition": "A disagreement, argument, or controversy, typically about a matter of fact or interpretation.",
  "level": "general",
  "starred": false
 },
 {
  "id": 141,
  "word": "Deliberation",
  "definition": "Careful consideration or discussion before making a decision or taking action.",
  "level": "general",
  "starred": false
 },
 {
  "id": 142,
  "word": "Consensus",
  "definition": "General agreement among a group of people; collective opinion or judgment reached by mutual consent.",
  "level": "general",
  "starred": false
 },
 {
  "id": 143,
  "word": "Coarse",
  "definition": "Rough or harsh in texture; lacking refinement or delicacy.",
  "level": "general",
  "starred": false
 },
 {
  "id": 144,
  "word": "Lobbying",
  "definition": "The act of attempting to influence decisions made by officials in a government, organization, or other group.",
  "level": "general",
  "starred": false
 },
 {
  "id": 145,
  "word": "Detract",
  "definition": "To diminish or take away from the value, importance, or quality of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 146,
  "word": "Cynical",
  "definition": "Distrustful or pessimistic about the motives of others; believing that people are motivated purely by self-interest.",
  "level": "general",
  "starred": false
 },
 {
  "id": 147,
  "word": "Indistinct",
  "definition": "Not clearly defined or distinguishable; lacking sharpness or clarity.",
  "level": "general",
  "starred": false
 },
 {
  "id": 148,
  "word": "Nuance",
  "definition": "A subtle difference in or shade of meaning, expression, or sound.",
  "level": "general",
  "starred": false
 },
 {
  "id": 149,
  "word": "Exhaustive",
  "definition": "Including or considering all elements or aspects; thorough and comprehensive in coverage or detail.",
  "level": "general",
  "starred": false
 },
 {
  "id": 150,
  "word": "Cited",
  "definition": "Mentioned as an example or piece of evidence.",
  "level": "general",
  "starred": false
 },
 {
  "id": 151,
  "word": "Congruence",
  "definition": "Agreement or harmony; compatibility.",
  "level": "general",
  "starred": false
 },
 {
  "id": 152,
  "word": "Credible",
  "definition": "Able to be believed; convincing.",
  "level": "general",
  "starred": false
 },
 {
  "id": 153,
  "word": "Customary",
  "definition": "According to the customs or usual practices.",
  "level": "general",
  "starred": false
 },
 {
  "id": 154,
  "word": "Decisive",
  "definition": "Settling an issue; producing a definite result.",
  "level": "general",
  "starred": false
 },
 {
  "id": 155,
  "word": "Fled",
  "definition": "Ran away from danger or from something frightening.",
  "level": "general",
  "starred": false
 },
 {
  "id": 156,
  "word": "Heterogeneous",
  "definition": "Diverse in character or content.",
  "level": "general",
  "starred": false
 },
 {
  "id": 157,
  "word": "Imperative",
  "definition": "Of vital importance; crucial.",
  "level": "general",
  "starred": false
 },
 {
  "id": 158,
  "word": "Improve on",
  "definition": "Make better.",
  "level": "general",
  "starred": false
 },
 {
  "id": 159,
  "word": "Inextricable from",
  "definition": "Impossible to disentangle or separate from.",
  "level": "general",
  "starred": false
 },
 {
  "id": 160,
  "word": "Interpretation",
  "definition": "The action of explaining the meaning of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 161,
  "word": "Intrinsic",
  "definition": "Belonging naturally; essential.",
  "level": "general",
  "starred": false
 },
 {
  "id": 162,
  "word": "Invaluable",
  "definition": "Extremely useful; indispensable.",
  "level": "general",
  "starred": false
 },
 {
  "id": 163,
  "word": "Obstruct",
  "definition": "Block (an opening, path, road, etc.); be or get in the way of.",
  "level": "general",
  "starred": false
 },
 {
  "id": 164,
  "word": "Paradigm",
  "definition": "A typical example or pattern of something; a model.",
  "level": "general",
  "starred": false
 },
 {
  "id": 165,
  "word": "Permeate",
  "definition": "Spread throughout (something); pervade.",
  "level": "general",
  "starred": false
 },
 {
  "id": 166,
  "word": "Pervasive",
  "definition": "(Especially of an unwelcome influence or physical effect) spreading widely throughout an area or a group of people.",
  "level": "general",
  "starred": false
 },
 {
  "id": 167,
  "word": "Replicate",
  "definition": "Make an exact copy of; reproduce.",
  "level": "general",
  "starred": false
 },
 {
  "id": 168,
  "word": "Subordinate",
  "definition": "Lower in rank or position.",
  "level": "general",
  "starred": false
 },
 {
  "id": 169,
  "word": "Suppress",
  "definition": "Forcibly put an end to.",
  "level": "general",
  "starred": false
 },
 {
  "id": 170,
  "word": "Terraced",
  "definition": "(Especially of a house or a row of houses) built in a row and having a uniform front, typically with steps leading up to each front door.",
  "level": "general",
  "starred": false
 },
 {
  "id": 171,
  "word": "Discount",
  "definition": "A reduction in the usual price of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 172,
  "word": "Denounce",
  "definition": "To publicly declare something to be wrong or evil.",
  "level": "general",
  "starred": false
 },
 {
  "id": 173,
  "word": "Defunct",
  "definition": "No longer existing or functioning.",
  "level": "general",
  "starred": false
 },
 {
  "id": 174,
  "word": "Magnify",
  "definition": "To make something appear larger than it is, especially with a lens or microscope.",
  "level": "general",
  "starred": false
 },
 {
  "id": 175,
  "word": "Assuage",
  "definition": "To make an unpleasant feeling less intense; to relieve or soothe.",
  "level": "general",
  "starred": false
 },
 {
  "id": 176,
  "word": "Designate",
  "definition": "To officially assign a specified status or name to something or someone.",
  "level": "general",
  "starred": false
 },
 {
  "id": 177,
  "word": "Appeasement",
  "definition": "The action or process of satisfying the demands of a potentially hostile person or group to maintain peace.",
  "level": "general",
  "starred": false
 },
 {
  "id": 178,
  "word": "Amplify",
  "definition": "To increase the volume of sound or to make something more intense or stronger.",
  "level": "general",
  "starred": false
 },
 {
  "id": 179,
  "word": "Abstain",
  "definition": "To choose not to do something, especially something one might be tempted to do.",
  "level": "general",
  "starred": false
 },
 {
  "id": 180,
  "word": "Ambiguous",
  "definition": "Open to more than one interpretation; not having one obvious meaning.",
  "level": "general",
  "starred": false
 },
 {
  "id": 181,
  "word": "Benign",
  "definition": "Gentle and kind; not harmful.",
  "level": "general",
  "starred": false
 },
 {
  "id": 182,
  "word": "Gratuitous",
  "definition": "Uncalled for; lacking good reason; unwarranted.",
  "level": "general",
  "starred": false
 },
 {
  "id": 183,
  "word": "Hypothetical",
  "definition": "Based on or involving a hypothesis; supposed but not necessarily real or true.",
  "level": "general",
  "starred": false
 },
 {
  "id": 184,
  "word": "Illicit",
  "definition": "Forbidden by law, rules, or custom.",
  "level": "general",
  "starred": false
 },
 {
  "id": 185,
  "word": "Circumvent",
  "definition": "To find a way around an obstacle or to overcome a problem in a clever and surreptitious way.",
  "level": "general",
  "starred": false
 },
 {
  "id": 186,
  "word": "Contingent to",
  "definition": "Dependent on certain conditions or circumstances.",
  "level": "general",
  "starred": false
 },
 {
  "id": 187,
  "word": "Obliged",
  "definition": "Required to do something by law, duty, or necessity.",
  "level": "general",
  "starred": false
 },
 {
  "id": 188,
  "word": "Stymie",
  "definition": "To prevent or hinder the progress of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 189,
  "word": "Denigrate",
  "definition": "To criticize unfairly; to disparage.",
  "level": "general",
  "starred": false
 },
 {
  "id": 190,
  "word": "Adept",
  "definition": "Very skilled or proficient at something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 191,
  "word": "Nullify",
  "definition": "To make something legally null and void; to invalidate.",
  "level": "general",
  "starred": false
 },
 {
  "id": 192,
  "word": "Lighthearted about",
  "definition": "Carefree and cheerful about something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 193,
  "word": "Outstrip",
  "definition": "To move faster than and overtake someone or something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 194,
  "word": "Disparage",
  "definition": "To regard or represent as being of little worth.",
  "level": "general",
  "starred": false
 },
 {
  "id": 195,
  "word": "Dignify",
  "definition": "To make something seem worthy and impressive.",
  "level": "general",
  "starred": false
 },
 {
  "id": 196,
  "word": "Palatable",
  "definition": "(Of food or drink) pleasant to taste; (of an action or proposal) acceptable or satisfactory.",
  "level": "general",
  "starred": false
 },
 {
  "id": 197,
  "word": "Unpalatable",
  "definition": "Not pleasant to taste; difficult to tolerate or accept.",
  "level": "general",
  "starred": false
 },
 {
  "id": 198,
  "word": "Nourish",
  "definition": "To provide with the food or other substances necessary for growth, health, and good condition.",
  "level": "general",
  "starred": false
 },
 {
  "id": 199,
  "word": "Arcane",
  "definition": "Understood by few; mysterious or secret.",
  "level": "general",
  "starred": false
 },
 {
  "id": 200,
  "word": "Juxtapose",
  "definition": "To place or deal with close together for contrasting effect.",
  "level": "general",
  "starred": false
 },
 {
  "id": 201,
  "word": "Esteem",
  "definition": "Respect and admiration, typically for a person.",
  "level": "general",
  "starred": false
 },
 {
  "id": 202,
  "word": "Aperture",
  "definition": "An opening, hole, or gap.",
  "level": "general",
  "starred": false
 },
 {
  "id": 203,
  "word": "Haphazard",
  "definition": "Lacking any obvious principle of organization.",
  "level": "general",
  "starred": false
 },
 {
  "id": 204,
  "word": "Reprieve",
  "definition": "A temporary relief or delay.",
  "level": "general",
  "starred": false
 },
 {
  "id": 205,
  "word": "Illuminate",
  "definition": "To light up or make clear.",
  "level": "general",
  "starred": false
 },
 {
  "id": 206,
  "word": "Conjecture",
  "definition": "An opinion or conclusion formed on the basis of incomplete information.",
  "level": "general",
  "starred": false
 },
 {
  "id": 207,
  "word": "Oddity",
  "definition": "A strange or peculiar person, thing, or trait.",
  "level": "general",
  "starred": false
 },
 {
  "id": 208,
  "word": "Coincidence",
  "definition": "A remarkable concurrence of events or circumstances without apparent causal connection.",
  "level": "general",
  "starred": false
 },
 {
  "id": 209,
  "word": "Incident",
  "definition": "An event or occurrence.",
  "level": "general",
  "starred": false
 },
 {
  "id": 210,
  "word": "Contentious",
  "definition": "Causing or likely to cause an argument; controversial.",
  "level": "general",
  "starred": false
 },
 {
  "id": 211,
  "word": "Sincerity",
  "definition": "The quality of being free from pretense, deceit, or hypocrisy.",
  "level": "general",
  "starred": false
 },
 {
  "id": 212,
  "word": "Counterfactual",
  "definition": "Relating to or expressing what has not happened or is not the case.",
  "level": "general",
  "starred": false
 },
 {
  "id": 213,
  "word": "Analogous",
  "definition": "Comparable in certain respects, typically in a way that makes clearer the nature of the things compared.",
  "level": "general",
  "starred": false
 },
 {
  "id": 214,
  "word": "Delicate",
  "definition": "Easily broken or damaged; fragile.",
  "level": "general",
  "starred": false
 },
 {
  "id": 215,
  "word": "Unprecedented",
  "definition": "Never done or known before.",
  "level": "general",
  "starred": false
 },
 {
  "id": 216,
  "word": "Tranquil",
  "definition": "Free from disturbance; calm.",
  "level": "general",
  "starred": false
 },
 {
  "id": 217,
  "word": "Efficacy",
  "definition": "The ability to produce a desired or intended result.",
  "level": "general",
  "starred": false
 },
 {
  "id": 218,
  "word": "Peaceful",
  "definition": "Free from disturbance; calm.",
  "level": "general",
  "starred": false
 },
 {
  "id": 219,
  "word": "Sanguine",
  "definition": "Optimistic or positive, especially in a difficult situation.",
  "level": "general",
  "starred": false
 },
 {
  "id": 220,
  "word": "Notional",
  "definition": "Existing only in theory or as a suggestion; not real or actual.",
  "level": "general",
  "starred": false
 },
 {
  "id": 221,
  "word": "Demarcation",
  "definition": "The action of fixing the boundary or limits of something; a dividing line.",
  "level": "general",
  "starred": false
 },
 {
  "id": 222,
  "word": "Profound",
  "definition": "Very great or intense; having deep meaning or insight.",
  "level": "general",
  "starred": false
 },
 {
  "id": 223,
  "word": "Desultory",
  "definition": "Lacking a plan, purpose, or enthusiasm; going from one subject to another in a half- hearted way.",
  "level": "general",
  "starred": false
 },
 {
  "id": 224,
  "word": "Misanthropic",
  "definition": "Disliking humankind and avoiding human society.",
  "level": "general",
  "starred": false
 },
 {
  "id": 225,
  "word": "Nominal",
  "definition": "Existing in name only, not real or actual; a small amount compared to the real value.",
  "level": "general",
  "starred": false
 },
 {
  "id": 226,
  "word": "Recalcitrant",
  "definition": "Stubbornly resistant to authority or control; uncooperative.",
  "level": "general",
  "starred": false
 },
 {
  "id": 227,
  "word": "Inconspicuous",
  "definition": "Not clearly visible or attracting attention; not noticeable.",
  "level": "general",
  "starred": false
 },
 {
  "id": 228,
  "word": "Discretion",
  "definition": "The freedom to decide what should be done in a particular situation; the quality of behaving in a discreet or careful way.",
  "level": "general",
  "starred": false
 },
 {
  "id": 229,
  "word": "Veritable",
  "definition": "Genuine or authentic.",
  "level": "general",
  "starred": false
 },
 {
  "id": 230,
  "word": "Adroit",
  "definition": "Clever, skillful.",
  "level": "general",
  "starred": false
 },
 {
  "id": 231,
  "word": "Novel",
  "definition": "New, original.",
  "level": "general",
  "starred": false
 },
 {
  "id": 232,
  "word": "Gauche",
  "definition": "Awkward, crude.",
  "level": "general",
  "starred": false
 },
 {
  "id": 233,
  "word": "Blend",
  "definition": "Mix, coalesce, fuse, merge, mingle.",
  "level": "general",
  "starred": false
 },
 {
  "id": 234,
  "word": "Relocation",
  "definition": "The act of moving or moving something or someone from one place to another.",
  "level": "general",
  "starred": false
 },
 {
  "id": 235,
  "word": "Classification",
  "definition": "Systematic arrangement in groups or categories according to established criteria.",
  "level": "general",
  "starred": false
 },
 {
  "id": 236,
  "word": "Exorbitant",
  "definition": "Going beyond the limits of what is fair, reasonable, or expected.",
  "level": "general",
  "starred": false
 },
 {
  "id": 237,
  "word": "Unwarranted",
  "definition": "Not justified or authorized.",
  "level": "general",
  "starred": false
 },
 {
  "id": 238,
  "word": "Conflate with",
  "definition": "To combine two or more separate things, especially pieces of text, to form a whole.",
  "level": "general",
  "starred": false
 },
 {
  "id": 239,
  "word": "Reconstituted",
  "definition": "Having been formed again, anew.",
  "level": "general",
  "starred": false
 },
 {
  "id": 240,
  "word": "Discrepant",
  "definition": "Inconsistent; conflicting; at variance.",
  "level": "general",
  "starred": false
 },
 {
  "id": 241,
  "word": "Jointly",
  "definition": "Together, in collaboration.",
  "level": "general",
  "starred": false
 },
 {
  "id": 242,
  "word": "Impart",
  "definition": "Make known, pass on, convey, transmit.",
  "level": "general",
  "starred": false
 },
 {
  "id": 243,
  "word": "Reliable",
  "definition": "Able to be trusted or depended on; consistently good in quality or performance.",
  "level": "general",
  "starred": false
 },
 {
  "id": 244,
  "word": "Subtle",
  "definition": "Achieved in a quiet way that does not attract attention, often clever or sophisticated.",
  "level": "general",
  "starred": false
 },
 {
  "id": 245,
  "word": "Feasible",
  "definition": "Possible to do and likely to be successful.",
  "level": "general",
  "starred": false
 },
 {
  "id": 246,
  "word": "Accumulate",
  "definition": "To gather or collect something gradually over time.",
  "level": "general",
  "starred": false
 },
 {
  "id": 247,
  "word": "Disregard",
  "definition": "To ignore or not allow something to influence you.",
  "level": "general",
  "starred": false
 },
 {
  "id": 248,
  "word": "Ambidextrous",
  "definition": "Able to use both hands equally well; versatile.",
  "level": "general",
  "starred": false
 },
 {
  "id": 249,
  "word": "Colloquialism",
  "definition": "An informal word or expression more suitable for speech than formal writing.",
  "level": "general",
  "starred": false
 },
 {
  "id": 250,
  "word": "Ambivalent",
  "definition": "Having mixed feelings about someone or something; being unsure.",
  "level": "general",
  "starred": false
 },
 {
  "id": 251,
  "word": "Fraudulent",
  "definition": "Intended to deceive, typically for personal gain or to gain an unfair advantage.",
  "level": "general",
  "starred": false
 },
 {
  "id": 252,
  "word": "Influenced",
  "definition": "Having an effect on the character, development, or behavior of someone or something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 253,
  "word": "Exaggerate",
  "definition": "To describe something as larger or greater than it actually is.",
  "level": "general",
  "starred": false
 },
 {
  "id": 254,
  "word": "Evident",
  "definition": "Clear; easily seen or understood.",
  "level": "general",
  "starred": false
 },
 {
  "id": 255,
  "word": "Consequences",
  "definition": "The effects or outcomes of an action or situation.",
  "level": "general",
  "starred": false
 },
 {
  "id": 256,
  "word": "Continuity",
  "definition": "The consistency of parts of a story or elements in a series across different episodes.",
  "level": "general",
  "starred": false
 },
 {
  "id": 257,
  "word": "Innovation",
  "definition": "The introduction of new ideas, methods, or devices.",
  "level": "general",
  "starred": false
 },
 {
  "id": 258,
  "word": "Appraise",
  "definition": "To evaluate or estimate the nature, quality, or ability of someone or something.",
  "level": "general",
  "starred": true
 },
 {
  "id": 259,
  "word": "Heretofore",
  "definition": "Up to this time; until now.",
  "level": "general",
  "starred": false
 },
 {
  "id": 260,
  "word": "Validate",
  "definition": "To confirm or endorse something as accurate or legitimate.",
  "level": "general",
  "starred": false
 },
 {
  "id": 261,
  "word": "Enumerate",
  "definition": "To count out or list one by one.",
  "level": "general",
  "starred": false
 },
 {
  "id": 262,
  "word": "Accrete",
  "definition": "To grow or increase by gradual addition.",
  "level": "general",
  "starred": false
 },
 {
  "id": 263,
  "word": "Clumsily",
  "definition": "In a manner lacking skill, precision, or grace.",
  "level": "general",
  "starred": false
 },
 {
  "id": 264,
  "word": "Defy",
  "definition": "To openly resist or refuse to obey.",
  "level": "general",
  "starred": false
 },
 {
  "id": 265,
  "word": "Forestall",
  "definition": "To prevent by acting ahead of time.",
  "level": "general",
  "starred": false
 },
 {
  "id": 266,
  "word": "Indoctrinate",
  "definition": "To teach a person or group to accept a set of beliefs uncritically.",
  "level": "general",
  "starred": false
 },
 {
  "id": 267,
  "word": "Rambling",
  "definition": "Disorganized and lengthy.",
  "level": "general",
  "starred": false
 },
 {
  "id": 268,
  "word": "Obfuscate",
  "definition": "To deliberately make something confusing or difficult to understand.",
  "level": "general",
  "starred": false
 },
 {
  "id": 269,
  "word": "Confound",
  "definition": "To cause surprise or confusion in someone, especially by not acting according to their expectations.",
  "level": "general",
  "starred": false
 },
 {
  "id": 270,
  "word": "Recant",
  "definition": "To say that one no longer holds an opinion or belief, especially one considered heretical.",
  "level": "general",
  "starred": false
 },
 {
  "id": 271,
  "word": "Retaliate",
  "definition": "To take revenge for a perceived wrong.",
  "level": "general",
  "starred": false
 },
 {
  "id": 272,
  "word": "Accessible",
  "definition": "Easy to approach, enter, use, or understand.",
  "level": "general",
  "starred": false
 },
 {
  "id": 273,
  "word": "Acclaim",
  "definition": "Enthusiastic public praise and approval.",
  "level": "general",
  "starred": false
 },
 {
  "id": 274,
  "word": "Affect",
  "definition": "To have an influence on or cause a change in something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 275,
  "word": "Allocated to",
  "definition": "Distributed or assigned for a particular purpose.",
  "level": "general",
  "starred": false
 },
 {
  "id": 276,
  "word": "Anticipate",
  "definition": "To regard as probable; expect or predict.",
  "level": "general",
  "starred": false
 },
 {
  "id": 277,
  "word": "Apathy toward",
  "definition": "A lack of interest, enthusiasm, or concern for something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 278,
  "word": "Applicable to",
  "definition": "Relevant or appropriate to a particular situation or matter.",
  "level": "general",
  "starred": false
 },
 {
  "id": 279,
  "word": "Apprised of",
  "definition": "Informed or told about something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 280,
  "word": "Bestowed on",
  "definition": "Conferred or presented as a gift or honor.",
  "level": "general",
  "starred": false
 },
 {
  "id": 281,
  "word": "Breadth of",
  "definition": "The extent of something from side to side; width; scope.",
  "level": "general",
  "starred": false
 },
 {
  "id": 282,
  "word": "Buttress",
  "definition": "A structure built against a wall for support (noun); to support or strengthen (verb).",
  "level": "general",
  "starred": true
 },
 {
  "id": 283,
  "word": "Capitalize (on)",
  "definition": "To take the opportunity to gain advantage from.",
  "level": "general",
  "starred": false
 },
 {
  "id": 284,
  "word": "Commended",
  "definition": "Praised formally or officially.",
  "level": "general",
  "starred": false
 },
 {
  "id": 285,
  "word": "Concealed from",
  "definition": "Kept hidden or secret from.",
  "level": "general",
  "starred": false
 },
 {
  "id": 286,
  "word": "Constrain",
  "definition": "To severely restrict in scope, extent, or activity; to limit or restrict with force.",
  "level": "general",
  "starred": false
 },
 {
  "id": 287,
  "word": "Controversy over",
  "definition": "Prolonged public disagreement or heated discussion about something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 288,
  "word": "Convene",
  "definition": "To come together or assemble, usually for a formal meeting or gathering.",
  "level": "general",
  "starred": true
 },
 {
  "id": 289,
  "word": "Critical",
  "definition": "Extremely important or essential.",
  "level": "general",
  "starred": false
 },
 {
  "id": 290,
  "word": "Debatable",
  "definition": "Open to discussion or argument; not certain.",
  "level": "general",
  "starred": false
 },
 {
  "id": 291,
  "word": "Demarcate",
  "definition": "To set the boundaries or limits of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 292,
  "word": "Discern",
  "definition": "To perceive or recognize (something) with difficulty.",
  "level": "general",
  "starred": false
 },
 {
  "id": 293,
  "word": "Discredit",
  "definition": "To harm the good reputation of (someone or something).",
  "level": "general",
  "starred": false
 },
 {
  "id": 294,
  "word": "Duplicate",
  "definition": "An exact copy or reproduction.",
  "level": "general",
  "starred": false
 },
 {
  "id": 295,
  "word": "Eclipsed",
  "definition": "Deprived (someone or something) of significance, power, or prominence.",
  "level": "general",
  "starred": false
 },
 {
  "id": 296,
  "word": "Elicit",
  "definition": "To draw forth (information, a response) from someone in reaction to one's own actions or questions.",
  "level": "general",
  "starred": false
 },
 {
  "id": 297,
  "word": "Embarrass",
  "definition": "To cause (someone) to feel awkward, self-conscious, or ashamed.",
  "level": "general",
  "starred": false
 },
 {
  "id": 298,
  "word": "Epitomize",
  "definition": "To be a perfect example of.",
  "level": "general",
  "starred": false
 },
 {
  "id": 299,
  "word": "Exploit",
  "definition": "To make use of (a resource) in a way considered unfair or unethical.",
  "level": "general",
  "starred": false
 },
 {
  "id": 300,
  "word": "Fluctuate with",
  "definition": "To rise and fall irregularly in number or amount.",
  "level": "general",
  "starred": false
 },
 {
  "id": 301,
  "word": "Foresight",
  "definition": "The ability to predict what will happen or be needed in the future.",
  "level": "general",
  "starred": false
 },
 {
  "id": 302,
  "word": "Habitable",
  "definition": "Suitable or good enough to live in.",
  "level": "general",
  "starred": false
 },
 {
  "id": 303,
  "word": "Hallmark",
  "definition": "A distinguishing characteristic or feature.",
  "level": "general",
  "starred": false
 },
 {
  "id": 304,
  "word": "Imitate",
  "definition": "To mimic or copy closely, especially in terms of behavior, speech, or appearance.",
  "level": "general",
  "starred": false
 },
 {
  "id": 305,
  "word": "Immense",
  "definition": "Extremely large or great, especially in scale or degree.",
  "level": "general",
  "starred": false
 },
 {
  "id": 306,
  "word": "Impartiality",
  "definition": "Equal treatment of all rivals or disputants; fairness.",
  "level": "general",
  "starred": false
 },
 {
  "id": 307,
  "word": "Impractical",
  "definition": "Not sensible or realistic; not practical.",
  "level": "general",
  "starred": false
 },
 {
  "id": 308,
  "word": "Incongruous with",
  "definition": "Not in harmony or fitting with something else.",
  "level": "general",
  "starred": false
 },
 {
  "id": 309,
  "word": "Indicative of",
  "definition": "Serving as a sign or indication of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 310,
  "word": "Inspiration for",
  "definition": "The process of being mentally stimulated to do or feel something, especially to do something creative.",
  "level": "general",
  "starred": false
 },
 {
  "id": 311,
  "word": "Instruct",
  "definition": "To give orders or directions to (someone).",
  "level": "general",
  "starred": false
 },
 {
  "id": 312,
  "word": "Integrated with",
  "definition": "Combined with another thing so that they become a whole.",
  "level": "general",
  "starred": false
 },
 {
  "id": 313,
  "word": "Intercede",
  "definition": "To intervene on behalf of another person; to mediate or plead in favor of someone.",
  "level": "general",
  "starred": false
 },
 {
  "id": 314,
  "word": "Locate",
  "definition": "To find the exact position of (something).",
  "level": "general",
  "starred": false
 },
 {
  "id": 315,
  "word": "Mimic",
  "definition": "To imitate or copy closely, especially in terms of behavior, speech, or appearance.",
  "level": "general",
  "starred": false
 },
 {
  "id": 316,
  "word": "Monetize",
  "definition": "To convert into or express in the form of currency; to make money from something.",
  "level": "general",
  "starred": true
 },
 {
  "id": 317,
  "word": "Motivation",
  "definition": "The reason or reasons one has for acting or behaving in a particular way.",
  "level": "general",
  "starred": false
 },
 {
  "id": 318,
  "word": "Mutable",
  "definition": "Liable to change.",
  "level": "general",
  "starred": false
 },
 {
  "id": 319,
  "word": "Neglect",
  "definition": "To pay no attention or too little attention to; disregard.",
  "level": "general",
  "starred": false
 },
 {
  "id": 320,
  "word": "Omnipresent",
  "definition": "Present everywhere at the same time; ubiquitous.",
  "level": "general",
  "starred": true
 },
 {
  "id": 321,
  "word": "Opportune for",
  "definition": "Timely; well-chosen for a particular purpose.",
  "level": "general",
  "starred": false
 },
 {
  "id": 322,
  "word": "Ordinary",
  "definition": "With no special or distinctive features; normal.",
  "level": "general",
  "starred": false
 },
 {
  "id": 323,
  "word": "Overlook",
  "definition": "To have missed or failed to notice something, usually because it was not obvious or attention was not given to it.",
  "level": "general",
  "starred": false
 },
 {
  "id": 324,
  "word": "Overreach by",
  "definition": "Exceeding one's authority or capability.",
  "level": "general",
  "starred": false
 },
 {
  "id": 325,
  "word": "Overshadows",
  "definition": "Appears more prominent or important than (something else); casts a shadow over.",
  "level": "general",
  "starred": false
 },
 {
  "id": 326,
  "word": "Perfunctory",
  "definition": "(Of an action or gesture) carried out with a minimum of effort or reflection.",
  "level": "general",
  "starred": false
 },
 {
  "id": 327,
  "word": "Persuade",
  "definition": "To induce (someone) to do something through reasoning or argument.",
  "level": "general",
  "starred": false
 },
 {
  "id": 328,
  "word": "Placated by",
  "definition": "Made (someone) less angry or hostile, usually by concessions.",
  "level": "general",
  "starred": false
 },
 {
  "id": 329,
  "word": "Postulate",
  "definition": "To suggest or assume the existence, fact, or truth of (something) as a basis for reasoning or discussion.",
  "level": "general",
  "starred": false
 },
 {
  "id": 330,
  "word": "Prevail over",
  "definition": "To prove more powerful or superior.",
  "level": "general",
  "starred": false
 },
 {
  "id": 331,
  "word": "Prioritize",
  "definition": "To designate or treat (something) as being more important than other things.",
  "level": "general",
  "starred": false
 },
 {
  "id": 332,
  "word": "Punitive",
  "definition": "Inflicting or intended as punishment.",
  "level": "general",
  "starred": false
 },
 {
  "id": 333,
  "word": "Rationalize",
  "definition": "To attempt to explain or justify (behavior or an attitude) with plausible reasons, even if these are not true or appropriate.",
  "level": "general",
  "starred": false
 },
 {
  "id": 334,
  "word": "Reception of",
  "definition": "The manner in which something is received.",
  "level": "general",
  "starred": false
 },
 {
  "id": 335,
  "word": "Relevant",
  "definition": "Closely connected or appropriate to what is being done or considered.",
  "level": "general",
  "starred": false
 },
 {
  "id": 336,
  "word": "Renovate",
  "definition": "To restore (something old, especially a building) to a good state of repair.",
  "level": "general",
  "starred": false
 },
 {
  "id": 337,
  "word": "Respectable",
  "definition": "Regarded by society as proper, correct, or good.",
  "level": "general",
  "starred": false
 },
 {
  "id": 338,
  "word": "Reveal",
  "definition": "To make (previously unknown or secret information) known to others.",
  "level": "general",
  "starred": false
 },
 {
  "id": 339,
  "word": "Sanction",
  "definition": "Official permission or approval for an action; a penalty for disobeying a law.",
  "level": "general",
  "starred": false
 },
 {
  "id": 340,
  "word": "Secluded",
  "definition": "Not seen or visited by many people; sheltered and private.",
  "level": "general",
  "starred": false
 },
 {
  "id": 341,
  "word": "Trivial",
  "definition": "Of little value or importance; insignificant.",
  "level": "general",
  "starred": false
 },
 {
  "id": 342,
  "word": "Unsympathetic to",
  "definition": "Not feeling, showing, or expressing sympathy towards.",
  "level": "general",
  "starred": false
 },
 {
  "id": 343,
  "word": "Utopian",
  "definition": "Modeled on or aiming for a state in which everything is perfect; idealistic.",
  "level": "general",
  "starred": false
 },
 {
  "id": 344,
  "word": "Viable",
  "definition": "Capable of working successfully; feasible.",
  "level": "general",
  "starred": false
 },
 {
  "id": 345,
  "word": "Wrought by",
  "definition": "Caused or effected by.",
  "level": "general",
  "starred": false
 },
 {
  "id": 346,
  "word": "Ongoing",
  "definition": "Continuing to happen or develop without stopping.",
  "level": "general",
  "starred": false
 },
 {
  "id": 347,
  "word": "Displaced",
  "definition": "Forced to leave one's home or usual position by an external force.",
  "level": "general",
  "starred": false
 },
 {
  "id": 348,
  "word": "Controversial",
  "definition": "Causing strong disagreement or debate among people.",
  "level": "general",
  "starred": false
 },
 {
  "id": 349,
  "word": "Contributions",
  "definition": "Things given or done to help bring about a result or support a cause.",
  "level": "general",
  "starred": false
 },
 {
  "id": 350,
  "word": "Resolutions",
  "definition": "Firm decisions made to do or not do something, or formal expressions of opinion by a group.",
  "level": "general",
  "starred": false
 },
 {
  "id": 351,
  "word": "Negotiations",
  "definition": "Discussions aimed at reaching an agreement between two or more parties.",
  "level": "general",
  "starred": false
 },
 {
  "id": 352,
  "word": "Justifications",
  "definition": "Reasons or explanations given to show that something is right or reasonable.",
  "level": "general",
  "starred": false
 },
 {
  "id": 353,
  "word": "Confusing to",
  "definition": "Difficult to understand or make sense of from a particular person's perspective.",
  "level": "general",
  "starred": false
 },
 {
  "id": 354,
  "word": "Exciting to",
  "definition": "Causing enthusiasm or eager interest in a particular person or group.",
  "level": "general",
  "starred": false
 },
 {
  "id": 355,
  "word": "Disliked by",
  "definition": "Regarded with distaste or disapproval by a particular person or group.",
  "level": "general",
  "starred": false
 },
 {
  "id": 356,
  "word": "Unrivaled",
  "definition": "Having no equal; better than everything else of the same kind.",
  "level": "general",
  "starred": false
 },
 {
  "id": 357,
  "word": "Dynamic",
  "definition": "Constantly changing, active, or full of energy and new ideas.",
  "level": "general",
  "starred": false
 },
 {
  "id": 358,
  "word": "Sustainable",
  "definition": "Able to be maintained over time without depleting resources or causing harm.",
  "level": "general",
  "starred": false
 },
 {
  "id": 359,
  "word": "Immutable",
  "definition": "Unchanging over time; impossible to alter or modify.",
  "level": "general",
  "starred": false
 },
 {
  "id": 360,
  "word": "Amalgamated",
  "definition": "Combined or merged to form a single unified whole.",
  "level": "general",
  "starred": false
 },
 {
  "id": 361,
  "word": "Promulgated",
  "definition": "Made known or put into effect by official public announcement.",
  "level": "general",
  "starred": false
 },
 {
  "id": 362,
  "word": "Foretell",
  "definition": "To predict or announce something before it happens.",
  "level": "general",
  "starred": false
 },
 {
  "id": 363,
  "word": "Exhibit",
  "definition": "To display or show something publicly or as evidence.",
  "level": "general",
  "starred": false
 },
 {
  "id": 364,
  "word": "Predicated on",
  "definition": "Based on or dependent upon a particular assumption or condition being true.",
  "level": "general",
  "starred": false
 },
 {
  "id": 365,
  "word": "Mediated by",
  "definition": "Made possible, influenced, or transmitted through a particular agent or process.",
  "level": "general",
  "starred": false
 },
 {
  "id": 366,
  "word": "Decoupled from",
  "definition": "Separated or made independent from something it was previously connected to.",
  "level": "general",
  "starred": false
 },
 {
  "id": 367,
  "word": "Material to",
  "definition": "Relevant and significant to a particular matter or outcome.",
  "level": "general",
  "starred": false
 },
 {
  "id": 368,
  "word": "Outdated",
  "definition": "No longer current or useful; belonging to a past era.",
  "level": "general",
  "starred": false
 },
 {
  "id": 369,
  "word": "Lonely",
  "definition": "Feeling isolated or sad due to a lack of company or connection.",
  "level": "general",
  "starred": false
 },
 {
  "id": 370,
  "word": "Forgotten",
  "definition": "No longer remembered or given attention.",
  "level": "general",
  "starred": false
 },
 {
  "id": 371,
  "word": "Varied",
  "definition": "Showing a range of different types or forms; diverse.",
  "level": "general",
  "starred": false
 },
 {
  "id": 372,
  "word": "Provocative",
  "definition": "Deliberately intended to cause a strong reaction, debate, or irritation.",
  "level": "general",
  "starred": false
 },
 {
  "id": 373,
  "word": "Pretentious",
  "definition": "Claiming or displaying greater importance, talent, or culture than is actually possessed.",
  "level": "general",
  "starred": true
 },
 {
  "id": 374,
  "word": "Irrelevant",
  "definition": "Not connected to or important for the matter being considered.",
  "level": "general",
  "starred": false
 },
 {
  "id": 375,
  "word": "Presuppose",
  "definition": "To assume something to be true in advance as a basis for reasoning or action.",
  "level": "general",
  "starred": false
 },
 {
  "id": 376,
  "word": "Categorize",
  "definition": "To place people or things into groups based on shared characteristics.",
  "level": "general",
  "starred": false
 },
 {
  "id": 377,
  "word": "Concur with",
  "definition": "To agree with an opinion, decision, or statement made by someone else.",
  "level": "general",
  "starred": false
 },
 {
  "id": 378,
  "word": "Appeal to",
  "definition": "To make a request or argument directed at a person, group, or principle.",
  "level": "general",
  "starred": false
 },
 {
  "id": 379,
  "word": "Amass in",
  "definition": "To gradually gather or accumulate a large quantity within a place or category.",
  "level": "general",
  "starred": false
 },
 {
  "id": 380,
  "word": "Retroactively",
  "definition": "Taking effect from a date in the past, before a decision or rule was made.",
  "level": "general",
  "starred": false
 },
 {
  "id": 381,
  "word": "Ceremoniously",
  "definition": "Done with great formality and elaborate ritual or procedure.",
  "level": "general",
  "starred": false
 },
 {
  "id": 382,
  "word": "Reluctantly",
  "definition": "Done with hesitation or unwillingness; against one's preference.",
  "level": "general",
  "starred": false
 },
 {
  "id": 383,
  "word": "Peculiar",
  "definition": "Strange or unusual; different from what is normal or expected.",
  "level": "general",
  "starred": false
 },
 {
  "id": 384,
  "word": "Nostalgic",
  "definition": "Feeling a sentimental longing for a happy time in the past.",
  "level": "general",
  "starred": false
 },
 {
  "id": 385,
  "word": "Dispassionate",
  "definition": "Not influenced by strong emotion; objective and impartial.",
  "level": "general",
  "starred": false
 },
 {
  "id": 386,
  "word": "Ignore",
  "definition": "To deliberately pay no attention to something or someone.",
  "level": "general",
  "starred": false
 },
 {
  "id": 387,
  "word": "Identify",
  "definition": "To recognize and correctly name or distinguish something or someone.",
  "level": "general",
  "starred": false
 },
 {
  "id": 388,
  "word": "Perception of",
  "definition": "The way in which something is understood, interpreted, or regarded.",
  "level": "general",
  "starred": false
 },
 {
  "id": 389,
  "word": "Reproduction of",
  "definition": "The act of making a copy or replication of an original.",
  "level": "general",
  "starred": false
 },
 {
  "id": 390,
  "word": "Rigor",
  "definition": "The quality of being extremely thorough, careful, and precise.",
  "level": "general",
  "starred": false
 },
 {
  "id": 391,
  "word": "Obscurity",
  "definition": "The state of being unknown, unclear, or difficult to understand.",
  "level": "general",
  "starred": false
 },
 {
  "id": 392,
  "word": "Shallowness",
  "definition": "Lack of depth in thought, knowledge, or genuine feeling.",
  "level": "general",
  "starred": false
 },
 {
  "id": 393,
  "word": "Novelty",
  "definition": "The quality of being new, original, or unusual.",
  "level": "general",
  "starred": false
 },
 {
  "id": 394,
  "word": "Authorized",
  "definition": "Officially permitted or approved by someone in a position of authority.",
  "level": "general",
  "starred": false
 },
 {
  "id": 395,
  "word": "Applicable",
  "definition": "Relevant and appropriate to a particular situation or context.",
  "level": "general",
  "starred": false
 },
 {
  "id": 396,
  "word": "Sarcastic",
  "definition": "Using irony to mock or convey contempt, often in a biting or cutting way.",
  "level": "general",
  "starred": false
 },
 {
  "id": 397,
  "word": "Visionary",
  "definition": "Having the ability to think about the future with imagination and wisdom.",
  "level": "general",
  "starred": false
 },
 {
  "id": 398,
  "word": "Perform",
  "definition": "To carry out an action, task, or function.",
  "level": "general",
  "starred": false
 },
 {
  "id": 399,
  "word": "Prevent",
  "definition": "To stop something from happening or someone from doing something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 400,
  "word": "Recognized",
  "definition": "Acknowledged or identified as valid, known, or deserving of credit.",
  "level": "general",
  "starred": false
 },
 {
  "id": 401,
  "word": "Impeded",
  "definition": "Delayed or blocked from making progress by an obstacle or hindrance.",
  "level": "general",
  "starred": false
 },
 {
  "id": 402,
  "word": "Elasticity",
  "definition": "The ability to stretch, adapt, or return to an original state after change.",
  "level": "general",
  "starred": false
 },
 {
  "id": 403,
  "word": "Reciprocity",
  "definition": "A mutual exchange where both parties give and receive equally.",
  "level": "general",
  "starred": false
 },
 {
  "id": 404,
  "word": "Cohesion",
  "definition": "The quality of being united, consistent, or holding together as a whole.",
  "level": "general",
  "starred": false
 },
 {
  "id": 405,
  "word": "Affection",
  "definition": "A gentle feeling of fondness, warmth, or care toward someone.",
  "level": "general",
  "starred": false
 },
 {
  "id": 406,
  "word": "Warranted",
  "definition": "Justified or authorized based on evidence or circumstances.",
  "level": "general",
  "starred": false
 },
 {
  "id": 407,
  "word": "Remove",
  "definition": "To take something away from its place or eliminate it.",
  "level": "general",
  "starred": false
 },
 {
  "id": 408,
  "word": "Rank",
  "definition": "To assign a position in a scale or order based on quality, importance, or value.",
  "level": "general",
  "starred": false
 },
 {
  "id": 409,
  "word": "Unfold",
  "definition": "To gradually develop, reveal, or become clear over time.",
  "level": "general",
  "starred": false
 },
 {
  "id": 410,
  "word": "Diminish",
  "definition": "To make or become smaller, weaker, or less significant.",
  "level": "general",
  "starred": false
 },
 {
  "id": 411,
  "word": "Vary",
  "definition": "To change or differ from a standard or between instances.",
  "level": "general",
  "starred": false
 },
 {
  "id": 412,
  "word": "Measure",
  "definition": "To determine the size, extent, or degree of something using a standard unit.",
  "level": "general",
  "starred": false
 },
 {
  "id": 413,
  "word": "Enhancements",
  "definition": "Improvements made to something to increase its quality or effectiveness.",
  "level": "general",
  "starred": false
 },
 {
  "id": 414,
  "word": "Pranks",
  "definition": "Playful or mischievous acts intended to trick or surprise someone.",
  "level": "general",
  "starred": false
 },
 {
  "id": 415,
  "word": "Revelations",
  "definition": "Surprising or significant facts that are made known for the first time.",
  "level": "general",
  "starred": false
 },
 {
  "id": 416,
  "word": "Analyses",
  "definition": "Detailed examinations of the structure or elements of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 417,
  "word": "Distort",
  "definition": "To twist something out of its original shape or misrepresent its meaning.",
  "level": "general",
  "starred": false
 },
 {
  "id": 418,
  "word": "Supplement",
  "definition": "To add something extra in order to improve or complete something else.",
  "level": "general",
  "starred": false
 },
 {
  "id": 419,
  "word": "Enact",
  "definition": "To put a law, plan, or idea into effect or practice.",
  "level": "general",
  "starred": false
 },
 {
  "id": 420,
  "word": "Substantiate",
  "definition": "To provide evidence that confirms or supports a claim or theory.",
  "level": "general",
  "starred": false
 },
 {
  "id": 421,
  "word": "Imperative for",
  "definition": "Absolutely necessary or urgently required for a particular purpose.",
  "level": "general",
  "starred": false
 },
 {
  "id": 422,
  "word": "Emblematic of",
  "definition": "Serving as a symbol or representative example of something larger.",
  "level": "general",
  "starred": false
 },
 {
  "id": 423,
  "word": "Interchangeable with",
  "definition": "Able to be swapped or exchanged with something else without any difference in outcome.",
  "level": "general",
  "starred": false
 },
 {
  "id": 424,
  "word": "Omit",
  "definition": "To leave something out, whether intentionally or by accident.",
  "level": "general",
  "starred": false
 },
 {
  "id": 425,
  "word": "Evade",
  "definition": "To avoid or escape something, especially through cleverness or deception.",
  "level": "general",
  "starred": false
 },
 {
  "id": 426,
  "word": "Minimal",
  "definition": "Of the smallest possible amount or degree that is necessary.",
  "level": "general",
  "starred": false
 },
 {
  "id": 427,
  "word": "Static",
  "definition": "Lacking movement, change, or dynamic activity.",
  "level": "general",
  "starred": false
 },
 {
  "id": 428,
  "word": "Melodic",
  "definition": "Having a pleasant, tuneful, or flowing quality of sound.",
  "level": "general",
  "starred": false
 },
 {
  "id": 429,
  "word": "Encapsulate",
  "definition": "To express or contain the essential features of something in a concise form.",
  "level": "general",
  "starred": false
 },
 {
  "id": 430,
  "word": "Curtail",
  "definition": "To reduce or limit the extent, quantity, or scope of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 431,
  "word": "Fortitude",
  "definition": "Mental and emotional strength that allows one to endure difficulty or pain with courage.",
  "level": "general",
  "starred": false
 },
 {
  "id": 432,
  "word": "Perturbation",
  "definition": "A state of anxiety or mental unease, or a small disturbance in a system.",
  "level": "general",
  "starred": false
 },
 {
  "id": 433,
  "word": "Nonchalance",
  "definition": "A relaxed and casual lack of concern or enthusiasm.",
  "level": "general",
  "starred": false
 },
 {
  "id": 434,
  "word": "Indolence",
  "definition": "A habitual tendency to avoid activity or effort; laziness.",
  "level": "general",
  "starred": false
 },
 {
  "id": 435,
  "word": "Abatement",
  "definition": "A reduction in the degree, intensity, or amount of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 436,
  "word": "Aggregation",
  "definition": "The process of collecting separate elements and combining them into a whole.",
  "level": "general",
  "starred": false
 },
 {
  "id": 437,
  "word": "Dearth",
  "definition": "A scarcity or insufficient supply of something.",
  "level": "general",
  "starred": false
 },
 {
  "id": 438,
  "word": "Dissonance",
  "definition": "A tension or clash resulting from the combination of incompatible elements or ideas.",
  "level": "general",
  "starred": false
 },
 {
  "id": 439,
  "word": "Protracted",
  "definition": "Lasting for a longer time than expected or desired.",
  "level": "general",
  "starred": false
 },
 {
  "id": 440,
  "word": "Disseminated",
  "definition": "Spread or distributed widely across a large area or population.",
  "level": "general",
  "starred": false
 },
 {
  "id": 441,
  "word": "Inhibited",
  "definition": "Restrained from free expression or action, often due to self-consciousness or external restriction.",
  "level": "general",
  "starred": false
 },
 {
  "id": 442,
  "word": "Catalyzed",
  "definition": "Caused or accelerated by an agent that triggers a reaction or process.",
  "level": "general",
  "starred": false
 },
 {
  "id": 443,
  "word": "Abridge",
  "definition": "To shorten a text or piece of work while retaining the key content.",
  "level": "general",
  "starred": false
 },
 {
  "id": 444,
  "word": "Immoderate",
  "definition": "Exceeding reasonable or normal limits; excessive or extreme.",
  "level": "general",
  "starred": false
 },
 {
  "id": 445,
  "word": "Unappreciated",
  "definition": "Not recognized or valued as much as deserved.",
  "level": "general",
  "starred": false
 },
 {
  "id": 446,
  "word": "Compressed",
  "definition": "Reduced in size, space, or duration by applying force or pressure.",
  "level": "general",
  "starred": false
 },
 {
  "id": 447,
  "word": "Conflated with",
  "definition": "Incorrectly treated as the same thing as something else, merging two distinct ideas.",
  "level": "general",
  "starred": false
 },
 {
  "id": 448,
  "word": "Overcome by",
  "definition": "Overwhelmed or defeated by a force, emotion, or circumstance.",
  "level": "general",
  "starred": false
 },
 {
  "id": 449,
  "word": "Compelled by",
  "definition": "Driven or forced into action by a strong external or internal pressure.",
  "level": "general",
  "starred": false
 },
 {
  "id": 450,
  "word": "Attrition",
  "definition": "A gradual reduction in number or strength due to sustained pressure or loss over time.",
  "level": "general",
  "starred": false
 },
 {
  "id": 451,
  "word": "Circumspection",
  "definition": "Careful consideration of all circumstances and possible consequences before acting.",
  "level": "general",
  "starred": false
 },
 {
  "id": 452,
  "word": "Mock",
  "definition": "To ridicule or imitate someone/something in a contemptuous way",
  "level": "general",
  "starred": false
 },
 {
  "id": 453,
  "word": "Correct",
  "definition": "To make something right or free from error",
  "level": "general",
  "starred": false
 },
 {
  "id": 454,
  "word": "Undermine",
  "definition": "To weaken or damage something gradually and secretly",
  "level": "general",
  "starred": false
 },
 {
  "id": 455,
  "word": "Substantial",
  "definition": "Of considerable size, value, or importance",
  "level": "general",
  "starred": false
 },
 {
  "id": 456,
  "word": "Insurmountable",
  "definition": "Too great or difficult to be overcome",
  "level": "general",
  "starred": false
 },
 {
  "id": 457,
  "word": "Recur",
  "definition": "To happen or appear again repeatedly",
  "level": "general",
  "starred": false
 },
 {
  "id": 458,
  "word": "Dissipate",
  "definition": "To scatter or cause something to gradually disappear",
  "level": "general",
  "starred": false
 },
 {
  "id": 459,
  "word": "Concentrate",
  "definition": "To focus attention or effort on something specific",
  "level": "general",
  "starred": false
 },
 {
  "id": 460,
  "word": "Terminate",
  "definition": "To bring something to an end",
  "level": "general",
  "starred": false
 },
 {
  "id": 461,
  "word": "Overcame",
  "definition": "Successfully dealt with or gained control over something difficult",
  "level": "general",
  "starred": false
 },
 {
  "id": 462,
  "word": "Decried",
  "definition": "Publicly denounced or expressed strong disapproval of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 463,
  "word": "Surpassed",
  "definition": "Exceeded or went beyond a limit, expectation, or achievement",
  "level": "general",
  "starred": false
 },
 {
  "id": 464,
  "word": "Enhanced",
  "definition": "Intensified or improved the quality, value, or extent of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 465,
  "word": "Preceded",
  "definition": "Came before something else in time, order, or position",
  "level": "general",
  "starred": false
 },
 {
  "id": 466,
  "word": "Summarized",
  "definition": "Gave a brief statement of the main points of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 467,
  "word": "Expediency",
  "definition": "The quality of being convenient and practical, often at the expense of principle",
  "level": "general",
  "starred": false
 },
 {
  "id": 468,
  "word": "Fecundity",
  "definition": "The ability to produce abundant growth, offspring, or creative output",
  "level": "general",
  "starred": false
 },
 {
  "id": 469,
  "word": "Overshadow",
  "definition": "To make someone or something seem less important by comparison",
  "level": "general",
  "starred": false
 },
 {
  "id": 470,
  "word": "Distract",
  "definition": "To divert attention away from what someone is focused on",
  "level": "general",
  "starred": false
 },
 {
  "id": 471,
  "word": "Honor",
  "definition": "To regard or treat someone with great respect and admiration",
  "level": "general",
  "starred": false
 },
 {
  "id": 472,
  "word": "Superior",
  "definition": "Higher in rank, quality, or importance than others",
  "level": "general",
  "starred": false
 },
 {
  "id": 473,
  "word": "Supportive",
  "definition": "Providing encouragement, help, or approval to someone",
  "level": "general",
  "starred": false
 },
 {
  "id": 474,
  "word": "Well-behaved",
  "definition": "Conducting oneself in a polite, disciplined, and acceptable manner",
  "level": "general",
  "starred": false
 },
 {
  "id": 475,
  "word": "Considerable",
  "definition": "Notably large in size, extent, or importance",
  "level": "general",
  "starred": false
 },
 {
  "id": 476,
  "word": "Capable",
  "definition": "Having the ability, skill, or qualities to do something",
  "level": "general",
  "starred": false
 },
 {
  "id": 477,
  "word": "Solitary",
  "definition": "Done alone; existing or living without others",
  "level": "general",
  "starred": false
 },
 {
  "id": 478,
  "word": "Coordinated",
  "definition": "Organized so that different elements work together efficiently",
  "level": "general",
  "starred": false
 },
 {
  "id": 479,
  "word": "Considerate",
  "definition": "Thoughtful of the feelings and needs of others",
  "level": "general",
  "starred": false
 },
 {
  "id": 480,
  "word": "Coincidental",
  "definition": "Happening by chance at the same time without a causal connection",
  "level": "general",
  "starred": false
 },
 {
  "id": 481,
  "word": "Installing",
  "definition": "Setting something up or placing it into position for use",
  "level": "general",
  "starred": false
 },
 {
  "id": 482,
  "word": "Renewing",
  "definition": "Resuming or restoring something after an interruption or period of decline",
  "level": "general",
  "starred": false
 },
 {
  "id": 483,
  "word": "Infer",
  "definition": "To reach a conclusion based on evidence and reasoning rather than direct statement",
  "level": "general",
  "starred": false
 },
 {
  "id": 484,
  "word": "Acquire",
  "definition": "To obtain or gain something through effort or experience",
  "level": "general",
  "starred": false
 },
 {
  "id": 485,
  "word": "Isolate",
  "definition": "To set apart or separate someone or something from others",
  "level": "general",
  "starred": false
 },
 {
  "id": 486,
  "word": "Preserve",
  "definition": "To maintain or keep something in its original state; to protect from harm",
  "level": "general",
  "starred": false
 },
 {
  "id": 487,
  "word": "Inexplicable",
  "definition": "Unable to be explained or accounted for",
  "level": "general",
  "starred": false
 },
 {
  "id": 488,
  "word": "Facetious",
  "definition": "Treating something serious with inappropriate humor or flippancy",
  "level": "general",
  "starred": false
 },
 {
  "id": 489,
  "word": "Proponent",
  "definition": "A person who advocates or supports a particular idea or cause",
  "level": "general",
  "starred": false
 },
 {
  "id": 490,
  "word": "Steward",
  "definition": "A person who manages or looks after something on behalf of others",
  "level": "general",
  "starred": false
 },
 {
  "id": 491,
  "word": "Apprentice",
  "definition": "A person learning a skill or trade under a more experienced person",
  "level": "general",
  "starred": false
 },
 {
  "id": 492,
  "word": "Harbinger",
  "definition": "A person or thing that signals the approach of something to come",
  "level": "general",
  "starred": false
 },
 {
  "id": 493,
  "word": "Unbolt",
  "definition": "To open or unlock something by drawing back a bolt",
  "level": "general",
  "starred": false
 },
 {
  "id": 494,
  "word": "Empty",
  "definition": "Containing nothing; lacking meaning, substance, or value",
  "level": "general",
  "starred": false
 },
 {
  "id": 495,
  "word": "Infinitesimal",
  "definition": "Extremely small to the point of being almost immeasurably tiny",
  "level": "general",
  "starred": false
 },
 {
  "id": 496,
  "word": "Verifiable",
  "definition": "Able to be confirmed or proven to be true",
  "level": "general",
  "starred": false
 },
 {
  "id": 497,
  "word": "Inestimable",
  "definition": "Too great or precious to be measured or calculated",
  "level": "general",
  "starred": false
 },
 {
  "id": 498,
  "word": "Paucity",
  "definition": "A very small or insufficient amount of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 499,
  "word": "Redundancy",
  "definition": "The state of something being unnecessary due to duplication or excess",
  "level": "general",
  "starred": false
 },
 {
  "id": 500,
  "word": "Disparity",
  "definition": "A notable difference or inequality between two or more things",
  "level": "general",
  "starred": false
 },
 {
  "id": 501,
  "word": "Repository",
  "definition": "A place where things are stored and can be retrieved",
  "level": "general",
  "starred": false
 },
 {
  "id": 502,
  "word": "Rarely",
  "definition": "Not often; on very few occasions",
  "level": "general",
  "starred": false
 },
 {
  "id": 503,
  "word": "Musical",
  "definition": "Relating to music; having a pleasant, harmonious quality",
  "level": "general",
  "starred": false
 },
 {
  "id": 504,
  "word": "Unvarying",
  "definition": "Remaining constant and not changing over time",
  "level": "general",
  "starred": false
 },
 {
  "id": 505,
  "word": "Exclusive",
  "definition": "Limited to a specific person or group; not available to everyone",
  "level": "general",
  "starred": false
 },
 {
  "id": 506,
  "word": "Modest",
  "definition": "Unassuming in the estimation of one's own abilities; not excessive",
  "level": "general",
  "starred": false
 },
 {
  "id": 507,
  "word": "Intermediate",
  "definition": "At a middle level between two extremes; neither basic nor advanced",
  "level": "general",
  "starred": false
 },
 {
  "id": 508,
  "word": "Neutral",
  "definition": "Not taking sides in a conflict or disagreement; not strongly expressed",
  "level": "general",
  "starred": false
 },
 {
  "id": 509,
  "word": "Compounding",
  "definition": "Making something worse by adding to it; combining multiple elements",
  "level": "general",
  "starred": false
 },
 {
  "id": 510,
  "word": "Obscuring",
  "definition": "Making something unclear, hidden, or difficult to understand",
  "level": "general",
  "starred": false
 },
 {
  "id": 511,
  "word": "Interrupting",
  "definition": "Breaking the continuity of something; stopping something temporarily",
  "level": "general",
  "starred": false
 },
 {
  "id": 512,
  "word": "Inertia",
  "definition": "Resistance to change or motion; tendency to remain in the current state",
  "level": "general",
  "starred": false
 },
 {
  "id": 513,
  "word": "Decisiveness",
  "definition": "The quality of being able to make decisions quickly and confidently",
  "level": "general",
  "starred": false
 },
 {
  "id": 514,
  "word": "Turnover",
  "definition": "The rate at which people or things are replaced within a given period",
  "level": "general",
  "starred": false
 },
 {
  "id": 515,
  "word": "Contain",
  "definition": "To hold something within limits or keep it under control",
  "level": "general",
  "starred": false
 },
 {
  "id": 516,
  "word": "Prepare",
  "definition": "To make ready or suitable for a particular purpose or event",
  "level": "general",
  "starred": false
 },
 {
  "id": 517,
  "word": "Discover",
  "definition": "To find or become aware of something for the first time",
  "level": "general",
  "starred": false
 },
 {
  "id": 518,
  "word": "Concerning",
  "definition": "Relating to or about a particular subject; causing worry or unease",
  "level": "general",
  "starred": false
 },
 {
  "id": 519,
  "word": "Comparable",
  "definition": "Similar enough to be judged or measured against something else",
  "level": "general",
  "starred": false
 },
 {
  "id": 520,
  "word": "Sympathetic",
  "definition": "Showing understanding and care for someone else's feelings or situation",
  "level": "general",
  "starred": false
 },
 {
  "id": 521,
  "word": "Deliberate",
  "definition": "Done with full awareness and intention; carefully considered",
  "level": "general",
  "starred": false
 },
 {
  "id": 522,
  "word": "Undertake",
  "definition": "To commit oneself to carrying out a task or responsibility",
  "level": "general",
  "starred": false
 },
 {
  "id": 523,
  "word": "Superficial",
  "definition": "Existing only at the surface level; lacking depth or substance",
  "level": "general",
  "starred": false
 },
 {
  "id": 524,
  "word": "Myriad",
  "definition": "A countless or extremely large number of things",
  "level": "general",
  "starred": false
 },
 {
  "id": 525,
  "word": "Deficient",
  "definition": "Lacking in the amount or quality considered necessary or normal",
  "level": "general",
  "starred": false
 },
 {
  "id": 526,
  "word": "Untenable",
  "definition": "A position or argument that cannot be defended or maintained under scrutiny",
  "level": "general",
  "starred": false
 },
 {
  "id": 527,
  "word": "Necessitated",
  "definition": "Made something necessary or unavoidable as a result of circumstances",
  "level": "general",
  "starred": false
 },
 {
  "id": 528,
  "word": "Substantiated",
  "definition": "Supported or confirmed a claim with evidence or proof",
  "level": "general",
  "starred": false
 },
 {
  "id": 529,
  "word": "Promised",
  "definition": "Made a commitment or declaration that something will or will not happen",
  "level": "general",
  "starred": false
 },
 {
  "id": 530,
  "word": "Satisfy",
  "definition": "To meet the expectations, needs, or requirements of someone or something",
  "level": "general",
  "starred": false
 },
 {
  "id": 531,
  "word": "Simplify",
  "definition": "To make something easier to understand or do by reducing complexity",
  "level": "general",
  "starred": false
 },
 {
  "id": 532,
  "word": "Overtake",
  "definition": "To catch up with and move ahead of something; to become greater than",
  "level": "general",
  "starred": false
 },
 {
  "id": 533,
  "word": "Conflate",
  "definition": "To combine two or more distinct ideas or things into one, often incorrectly",
  "level": "general",
  "starred": false
 },
 {
  "id": 534,
  "word": "Lambaste",
  "definition": "To criticize someone or something harshly and severely",
  "level": "general",
  "starred": false
 },
 {
  "id": 535,
  "word": "Attributed",
  "definition": "Regarded something as being caused by or belonging to a specific source",
  "level": "general",
  "starred": false
 },
 {
  "id": 536,
  "word": "Referred",
  "definition": "Directed attention or made mention of something or someone",
  "level": "general",
  "starred": false
 },
 {
  "id": 537,
  "word": "Alluded",
  "definition": "Made an indirect or passing reference to something without stating it directly",
  "level": "general",
  "starred": false
 },
 {
  "id": 538,
  "word": "Entrusted",
  "definition": "Assigned responsibility for something to someone with confidence in them",
  "level": "general",
  "starred": false
 },
 {
  "id": 539,
  "word": "Contradicted",
  "definition": "Asserted the opposite of a statement; acted inconsistently with something",
  "level": "general",
  "starred": false
 },
 {
  "id": 540,
  "word": "Misinterpreted",
  "definition": "Understood or explained something incorrectly",
  "level": "general",
  "starred": false
 },
 {
  "id": 541,
  "word": "Hampered",
  "definition": "Hindered or slowed the progress or movement of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 542,
  "word": "Reflected",
  "definition": "Showed or expressed something; thought carefully about something",
  "level": "general",
  "starred": false
 },
 {
  "id": 543,
  "word": "Conceded",
  "definition": "Admitted that something is true or that an opponent has a point",
  "level": "general",
  "starred": false
 },
 {
  "id": 544,
  "word": "Prescribed",
  "definition": "Officially recommended or required a course of action or treatment",
  "level": "general",
  "starred": false
 },
 {
  "id": 545,
  "word": "Carve",
  "definition": "To cut or shape a hard material; to create a path or position through effort",
  "level": "general",
  "starred": false
 },
 {
  "id": 546,
  "word": "Retrieving",
  "definition": "Getting something back or recovering information from a source",
  "level": "general",
  "starred": false
 },
 {
  "id": 547,
  "word": "Pretending",
  "definition": "Acting as if something is true when it is not; playing a false role",
  "level": "general",
  "starred": false
 },
 {
  "id": 548,
  "word": "Capitalizing",
  "definition": "Taking advantage of a situation or opportunity for personal gain",
  "level": "general",
  "starred": false
 },
 {
  "id": 549,
  "word": "Eliciting",
  "definition": "Drawing out a response, reaction, or information from someone or something",
  "level": "general",
  "starred": false
 },
 {
  "id": 550,
  "word": "Belie",
  "definition": "To give a false impression of something; to contradict an expected appearance",
  "level": "general",
  "starred": false
 },
 {
  "id": 551,
  "word": "Underscore",
  "definition": "To emphasize or draw attention to the importance of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 552,
  "word": "Distrusted",
  "definition": "Regarded someone or something with suspicion and lack of confidence",
  "level": "general",
  "starred": false
 },
 {
  "id": 553,
  "word": "Embraced",
  "definition": "Willingly accepted or adopted an idea, change, or opportunity",
  "level": "general",
  "starred": false
 },
 {
  "id": 554,
  "word": "Genuine",
  "definition": "Truly what it is claimed to be; sincere and without pretense",
  "level": "general",
  "starred": false
 },
 {
  "id": 555,
  "word": "Register",
  "definition": "To formally record something; to notice or become aware of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 556,
  "word": "Possess",
  "definition": "To have or own something; to have a quality or characteristic",
  "level": "general",
  "starred": false
 },
 {
  "id": 557,
  "word": "Regard",
  "definition": "To consider or think about something in a particular way; to look steadily at",
  "level": "general",
  "starred": false
 },
 {
  "id": 558,
  "word": "Escape",
  "definition": "To break free from confinement or avoid something unpleasant",
  "level": "general",
  "starred": false
 },
 {
  "id": 559,
  "word": "Variable",
  "definition": "Liable to change; not consistent or fixed",
  "level": "general",
  "starred": false
 },
 {
  "id": 560,
  "word": "Persistent",
  "definition": "Continuing firmly over a long period despite difficulty or opposition",
  "level": "general",
  "starred": false
 },
 {
  "id": 561,
  "word": "Subdued",
  "definition": "Quieter or less intense than usual; not forceful or prominent",
  "level": "general",
  "starred": false
 },
 {
  "id": 562,
  "word": "Beneficial",
  "definition": "Producing good or helpful results; favorable in effect",
  "level": "general",
  "starred": false
 },
 {
  "id": 563,
  "word": "Innovative",
  "definition": "Featuring or introducing new ideas and creative methods",
  "level": "general",
  "starred": false
 },
 {
  "id": 564,
  "word": "Elusive",
  "definition": "Difficult to find, define, or achieve; tending to escape grasp",
  "level": "general",
  "starred": false
 },
 {
  "id": 565,
  "word": "Paradox",
  "definition": "A statement or situation that seems contradictory yet may reveal a deeper truth",
  "level": "general",
  "starred": false
 },
 {
  "id": 566,
  "word": "Exemplar",
  "definition": "A person or thing that serves as a typical or ideal example",
  "level": "general",
  "starred": false
 },
 {
  "id": 567,
  "word": "Omen",
  "definition": "An event or sign regarded as a warning or indication of future events",
  "level": "general",
  "starred": false
 },
 {
  "id": 568,
  "word": "Extort",
  "definition": "To obtain something through threats, force, or intimidation",
  "level": "general",
  "starred": false
 },
 {
  "id": 569,
  "word": "Impugn",
  "definition": "To call into question the honesty or validity of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 570,
  "word": "Pretexts for",
  "definition": "False reasons given to justify actions that have a different true motivation",
  "level": "general",
  "starred": false
 },
 {
  "id": 571,
  "word": "Conjectures about",
  "definition": "Opinions or conclusions formed without full evidence or proof",
  "level": "general",
  "starred": false
 },
 {
  "id": 572,
  "word": "Inducements to",
  "definition": "Factors or incentives that motivate someone toward a particular action",
  "level": "general",
  "starred": false
 },
 {
  "id": 573,
  "word": "Capacious",
  "definition": "Having a great deal of space; able to hold or contain a large amount",
  "level": "general",
  "starred": false
 },
 {
  "id": 574,
  "word": "Outmoded",
  "definition": "No longer current or fashionable; outdated and obsolete",
  "level": "general",
  "starred": false
 },
 {
  "id": 575,
  "word": "Cursory",
  "definition": "Hasty and superficial; carried out with little attention to detail",
  "level": "general",
  "starred": false
 },
 {
  "id": 576,
  "word": "Discerning",
  "definition": "Having sharp judgment and the ability to distinguish quality or truth",
  "level": "general",
  "starred": false
 },
 {
  "id": 577,
  "word": "Pine from your own yard",
  "definition": "To long for or desire what one already has close at hand",
  "level": "general",
  "starred": false
 },
 {
  "id": 578,
  "word": "Abate",
  "definition": "to become less strong, intense, or widespread",
  "level": "general",
  "starred": false
 },
 {
  "id": 579,
  "word": "Recalibrate",
  "definition": "To adjust or reset something in order to correct or improve its performance",
  "level": "general",
  "starred": false
 },
 {
  "id": 580,
  "word": "Proliferate",
  "definition": "To increase rapidly in number or spread quickly across an area",
  "level": "general",
  "starred": false
 },
 {
  "id": 581,
  "word": "Rehabilitate",
  "definition": "To restore someone or something to a former condition, reputation, or normal life",
  "level": "general",
  "starred": false
 },
 {
  "id": 582,
  "word": "Universal",
  "definition": "Applicable to or affecting all people, cases, or things without exception",
  "level": "general",
  "starred": false
 },
 {
  "id": 583,
  "word": "Elaborate",
  "definition": "Highly detailed and intricate in design or explanation",
  "level": "general",
  "starred": false
 },
 {
  "id": 584,
  "word": "Illusory",
  "definition": "Based on or producing an illusion; not real despite appearing to be",
  "level": "general",
  "starred": false
 },
 {
  "id": 585,
  "word": "Uncontroversial",
  "definition": "Not likely to cause disagreement or debate",
  "level": "general",
  "starred": false
 },
 {
  "id": 586,
  "word": "Approximate",
  "definition": "Nearly correct or accurate, but not exact",
  "level": "general",
  "starred": false
 },
 {
  "id": 587,
  "word": "Proclamations of",
  "definition": "Official or public declarations of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 588,
  "word": "Dissociate from",
  "definition": "To mentally or physically separate oneself from a connection or association",
  "level": "general",
  "starred": false
 },
 {
  "id": 589,
  "word": "Collude with",
  "definition": "To cooperate secretly with someone for a deceptive or illegal purpose",
  "level": "general",
  "starred": false
 },
 {
  "id": 590,
  "word": "Compensate for",
  "definition": "To make up for a shortcoming, loss, or imbalance",
  "level": "general",
  "starred": false
 },
 {
  "id": 591,
  "word": "Attest to",
  "definition": "To confirm or provide evidence that something is true",
  "level": "general",
  "starred": false
 },
 {
  "id": 592,
  "word": "Components",
  "definition": "Individual parts or elements that together make up a larger whole",
  "level": "general",
  "starred": false
 },
 {
  "id": 593,
  "word": "Safeguards",
  "definition": "Protective measures put in place to prevent harm or risk",
  "level": "general",
  "starred": false
 },
 {
  "id": 594,
  "word": "Self-servingly",
  "definition": "Acting in a way that benefits oneself, often at the expense of others",
  "level": "general",
  "starred": false
 },
 {
  "id": 595,
  "word": "Sporadically",
  "definition": "Occurring at irregular, unpredictable intervals",
  "level": "general",
  "starred": false
 },
 {
  "id": 596,
  "word": "Grudgingly",
  "definition": "Done with reluctance or quiet resentment",
  "level": "general",
  "starred": false
 },
 {
  "id": 597,
  "word": "Unfailingly",
  "definition": "Consistently and reliably, without ever falling short",
  "level": "general",
  "starred": false
 },
 {
  "id": 598,
  "word": "Jumped",
  "definition": "Past tense of \"jump\" — propelled oneself off the ground with force",
  "level": "general",
  "starred": false
 },
 {
  "id": 599,
  "word": "Enlarged",
  "definition": "Increased in size, scope, or scale",
  "level": "general",
  "starred": false
 },
 {
  "id": 600,
  "word": "Repair",
  "definition": "To restore something broken or damaged to working condition",
  "level": "general",
  "starred": false
 },
 {
  "id": 601,
  "word": "Command",
  "definition": "To give an authoritative directive; or to have control over something",
  "level": "general",
  "starred": false
 },
 {
  "id": 602,
  "word": "Hired",
  "definition": "Past tense of \"hire\" — employed someone in exchange for payment",
  "level": "general",
  "starred": false
 },
 {
  "id": 603,
  "word": "Obediently",
  "definition": "In a manner that complies with rules or instructions without resistance",
  "level": "general",
  "starred": false
 },
 {
  "id": 604,
  "word": "Scarcely",
  "definition": "Only just; barely; almost not at all",
  "level": "general",
  "starred": false
 },
 {
  "id": 605,
  "word": "Impolitely",
  "definition": "In a manner that is rude or lacking in courtesy",
  "level": "general",
  "starred": false
 },
 {
  "id": 606,
  "word": "Inferior",
  "definition": "Lower in quality, rank, or status compared to something else",
  "level": "general",
  "starred": false
 },
 {
  "id": 607,
  "word": "Random",
  "definition": "Lacking a fixed pattern or predictable order; chosen by chance",
  "level": "general",
  "starred": false
 },
 {
  "id": 608,
  "word": "Plentiful",
  "definition": "Available in large amounts; more than enough",
  "level": "general",
  "starred": false
 },
 {
  "id": 609,
  "word": "Rejection",
  "definition": "The act of dismissing, refusing, or not accepting something or someone",
  "level": "general",
  "starred": false
 },
 {
  "id": 610,
  "word": "Composing",
  "definition": "The act of creating or putting together a piece of writing, music, or other work",
  "level": "general",
  "starred": false
 },
 {
  "id": 611,
  "word": "Designation",
  "definition": "An official name, title, or classification assigned to something or someone",
  "level": "general",
  "starred": false
 },
 {
  "id": 612,
  "word": "Diffusion",
  "definition": "The gradual spread of something — an idea, substance, or practice",
  "level": "general",
  "starred": false
 },
 {
  "id": 613,
  "word": "Synthesis",
  "definition": "The combination of separate elements into a coherent unified whole",
  "level": "general",
  "starred": false
 },
 {
  "id": 614,
  "word": "Stipulation about",
  "definition": "A specific condition or requirement established as part of an agreement",
  "level": "general",
  "starred": false
 },
 {
  "id": 615,
  "word": "Complacency about",
  "definition": "A sense of uncritical self-satisfaction that leads to inaction or overlooking problems",
  "level": "general",
  "starred": false
 },
 {
  "id": 616,
  "word": "Provoke",
  "definition": "To deliberately trigger a reaction, emotion, or response in someone",
  "level": "general",
  "starred": false
 },
 {
  "id": 617,
  "word": "Divisive",
  "definition": "Causing strong disagreement or creating divisions among people",
  "level": "general",
  "starred": false
 },
 {
  "id": 618,
  "word": "Provisional",
  "definition": "Arranged temporarily with the expectation of being revised or replaced later",
  "level": "general",
  "starred": false
 },
 {
  "id": 619,
  "word": "Interconnected",
  "definition": "Linked together so that each part depends on or relates to the others",
  "level": "general",
  "starred": false
 },
 {
  "id": 620,
  "word": "Optional",
  "definition": "Available as a choice but not required or obligatory",
  "level": "general",
  "starred": false
 },
 {
  "id": 621,
  "word": "Informal",
  "definition": "Relaxed and unofficial; not bound by formal rules or conventions",
  "level": "general",
  "starred": false
 },
 {
  "id": 622,
  "word": "Embellished",
  "definition": "Decorated or enhanced with added details; sometimes used to mean exaggerated",
  "level": "general",
  "starred": false
 },
 {
  "id": 623,
  "word": "Quintessential",
  "definition": "Representing the most ideal or typical example of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 624,
  "word": "Inefficient",
  "definition": "Not making the best use of available time, energy, or resources",
  "level": "general",
  "starred": false
 },
 {
  "id": 625,
  "word": "Reciprocal",
  "definition": "Mutual; given or felt equally by both sides",
  "level": "general",
  "starred": false
 },
 {
  "id": 626,
  "word": "Interchangeable",
  "definition": "Capable of being substituted for one another without meaningful difference",
  "level": "general",
  "starred": false
 },
 {
  "id": 627,
  "word": "Unequal",
  "definition": "Not the same in amount, size, quality, or treatment",
  "level": "general",
  "starred": false
 },
 {
  "id": 628,
  "word": "Improvised",
  "definition": "Created or performed spontaneously without prior planning or preparation",
  "level": "general",
  "starred": false
 },
 {
  "id": 629,
  "word": "Invoked",
  "definition": "Called upon or cited as authority, justification, or support for something",
  "level": "general",
  "starred": false
 },
 {
  "id": 630,
  "word": "Abolished",
  "definition": "Formally and officially put an end to a law, system, or practice",
  "level": "general",
  "starred": false
 },
 {
  "id": 631,
  "word": "Partitioned",
  "definition": "Divided into separate, distinct sections or parts",
  "level": "general",
  "starred": false
 },
 {
  "id": 632,
  "word": "Distinct",
  "definition": "Clearly different or separate from something else; noticeably unique",
  "level": "general",
  "starred": false
 },
 {
  "id": 633,
  "word": "Explicable",
  "definition": "Capable of being explained or accounted for logically",
  "level": "general",
  "starred": false
 },
 {
  "id": 634,
  "word": "Supersede",
  "definition": "To replace something as more important, effective, or up to date",
  "level": "general",
  "starred": true
 },
 {
  "id": 635,
  "word": "Pervade",
  "definition": "To spread throughout something and be present in every part of it",
  "level": "general",
  "starred": false
 },
 {
  "id": 636,
  "word": "Foment",
  "definition": "To actively stir up or encourage the growth of trouble, unrest, or strong feeling",
  "level": "general",
  "starred": false
 },
 {
  "id": 637,
  "word": "Emissary for",
  "definition": "A person officially sent to represent or act on behalf of another",
  "level": "general",
  "starred": false
 },
 {
  "id": 638,
  "word": "Proxy for",
  "definition": "A person, thing, or measure that substitutes for or represents something else",
  "level": "general",
  "starred": false
 },
 {
  "id": 639,
  "word": "Alternatives to",
  "definition": "Other available options that can be chosen instead of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 640,
  "word": "Indices of",
  "definition": "Measurable signs or indicators that reflect the state or level of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 641,
  "word": "Dwindling",
  "definition": "Gradually becoming smaller, fewer, or weaker over time",
  "level": "general",
  "starred": false
 },
 {
  "id": 642,
  "word": "Situated",
  "definition": "Placed or positioned in a particular location or set of circumstances",
  "level": "general",
  "starred": false
 },
 {
  "id": 643,
  "word": "Perceptible",
  "definition": "Noticeable enough to be detected by the senses or the mind",
  "level": "general",
  "starred": false
 },
 {
  "id": 644,
  "word": "Constantly",
  "definition": "Continuously, without stopping or changing over time",
  "level": "general",
  "starred": false
 },
 {
  "id": 645,
  "word": "Imperceptibly",
  "definition": "In a way that is so gradual or subtle it cannot be easily noticed",
  "level": "general",
  "starred": false
 },
 {
  "id": 646,
  "word": "Fearfully",
  "definition": "In a manner driven by fear or causing extreme apprehension",
  "level": "general",
  "starred": false
 },
 {
  "id": 647,
  "word": "Continuously",
  "definition": "Without interruption; in an unbroken sequence over time",
  "level": "general",
  "starred": false
 },
 {
  "id": 648,
  "word": "Hastily",
  "definition": "Done with excessive speed, often resulting in carelessness",
  "level": "general",
  "starred": false
 },
 {
  "id": 649,
  "word": "Unsupported by",
  "definition": "Not backed, confirmed, or justified by evidence or authority",
  "level": "general",
  "starred": false
 },
 {
  "id": 650,
  "word": "Derived from",
  "definition": "Originated or developed from a particular source or origin",
  "level": "general",
  "starred": false
 },
 {
  "id": 651,
  "word": "Reminiscent of",
  "definition": "Tending to remind one of something through similarity or association",
  "level": "general",
  "starred": false
 },
 {
  "id": 652,
  "word": "Enmity",
  "definition": "Deep-seated mutual hostility or hatred between people or groups",
  "level": "general",
  "starred": false
 },
 {
  "id": 653,
  "word": "Anomaly",
  "definition": "Something that deviates from what is standard, normal, or expected",
  "level": "general",
  "starred": false
 },
 {
  "id": 654,
  "word": "Ambiguity",
  "definition": "The quality of being open to more than one interpretation; lack of clarity",
  "level": "general",
  "starred": false
 },
 {
  "id": 655,
  "word": "Obtrusive",
  "definition": "Noticeable in an unwelcome or intrusive way; hard to ignore",
  "level": "general",
  "starred": false
 },
 {
  "id": 656,
  "word": "Stubborn",
  "definition": "Refusing to change one's opinion or course of action despite pressure",
  "level": "general",
  "starred": false
 },
 {
  "id": 657,
  "word": "Expansive",
  "definition": "Covering a wide area or range; broad in scope or extent",
  "level": "general",
  "starred": false
 },
 {
  "id": 658,
  "word": "Insolent",
  "definition": "Showing rude disrespect, especially toward someone of authority",
  "level": "general",
  "starred": false
 },
 {
  "id": 659,
  "word": "Inevitable",
  "definition": "Certain to happen; impossible to prevent or avoid",
  "level": "general",
  "starred": false
 },
 {
  "id": 660,
  "word": "Extemporaneous",
  "definition": "Spoken or done without prior preparation or planning",
  "level": "general",
  "starred": false
 },
 {
  "id": 661,
  "word": "Inconsolable",
  "definition": "Too distressed or grief-stricken to be comforted",
  "level": "general",
  "starred": false
 },
 {
  "id": 662,
  "word": "Unanticipated",
  "definition": "Not expected or foreseen beforehand",
  "level": "general",
  "starred": false
 },
 {
  "id": 663,
  "word": "Apprehend",
  "definition": "To grasp or understand something mentally; or to arrest someone",
  "level": "general",
  "starred": false
 },
 {
  "id": 664,
  "word": "Varies from",
  "definition": "Differs or deviates in some way from something else",
  "level": "general",
  "starred": false
 },
 {
  "id": 665,
  "word": "Reacts to",
  "definition": "Responds or behaves in a certain way in response to something",
  "level": "general",
  "starred": false
 },
 {
  "id": 666,
  "word": "Argues with",
  "definition": "Engages in disagreement or debate with someone",
  "level": "general",
  "starred": false
 },
 {
  "id": 667,
  "word": "Monitor",
  "definition": "To regularly observe and check the progress or quality of something over time",
  "level": "general",
  "starred": false
 },
 {
  "id": 668,
  "word": "Renounce",
  "definition": "To formally give up, reject, or abandon a belief, claim, or course of action",
  "level": "general",
  "starred": false
 },
 {
  "id": 669,
  "word": "Complain",
  "definition": "To express dissatisfaction, pain, or annoyance about something",
  "level": "general",
  "starred": false
 },
 {
  "id": 670,
  "word": "Denote",
  "definition": "To be a sign or symbol of something; to indicate or represent directly",
  "level": "general",
  "starred": false
 },
 {
  "id": 671,
  "word": "Headstrong",
  "definition": "Determined to do things one's own way; refusing to be guided by others",
  "level": "general",
  "starred": false
 },
 {
  "id": 672,
  "word": "Meddlesome",
  "definition": "Inclined to interfere in other people's affairs without being asked",
  "level": "general",
  "starred": false
 },
 {
  "id": 673,
  "word": "Annul",
  "definition": "To officially declare something invalid or legally void",
  "level": "general",
  "starred": false
 },
 {
  "id": 674,
  "word": "Attain",
  "definition": "To succeed in achieving or reaching something through effort",
  "level": "general",
  "starred": false
 },
 {
  "id": 675,
  "word": "Sanitized",
  "definition": "Cleaned or made free from harmful elements; sometimes used to mean altered to remove offensive content",
  "level": "general",
  "starred": false
 },
 {
  "id": 676,
  "word": "Populated",
  "definition": "Filled with inhabitants or a specified set of people or things",
  "level": "general",
  "starred": false
 },
 {
  "id": 677,
  "word": "Estimated",
  "definition": "Calculated or judged something approximately rather than exactly",
  "level": "general",
  "starred": false
 },
 {
  "id": 678,
  "word": "Display",
  "definition": "To show or exhibit something in a visible or public way",
  "level": "general",
  "starred": false
 },
 {
  "id": 679,
  "word": "Spectacle",
  "definition": "A visually striking or remarkable event or scene that draws attention",
  "level": "general",
  "starred": false
 },
 {
  "id": 680,
  "word": "Resemblance",
  "definition": "A similarity in appearance or character between two things or people",
  "level": "general",
  "starred": false
 },
 {
  "id": 681,
  "word": "Deception",
  "definition": "The act of causing someone to believe something that is not true",
  "level": "general",
  "starred": false
 },
 {
  "id": 682,
  "word": "Scope",
  "definition": "The extent or range of something; how far something reaches or applies",
  "level": "general",
  "starred": false
 },
 {
  "id": 683,
  "word": "Terseness",
  "definition": "The quality of being brief and direct in expression, often to the point of seeming abrupt",
  "level": "general",
  "starred": false
 },
 {
  "id": 684,
  "word": "Reputation",
  "definition": "The general opinion that people hold about someone or something based on past behavior",
  "level": "general",
  "starred": false
 },
 {
  "id": 685,
  "word": "Multifariousness",
  "definition": "The quality of being varied and diverse across many forms or types",
  "level": "general",
  "starred": false
 },
 {
  "id": 686,
  "word": "Obstinacy",
  "definition": "Stubborn resistance to change, argument, or persuasion",
  "level": "general",
  "starred": false
 },
 {
  "id": 687,
  "word": "Entanglement",
  "definition": "A complicated or compromising situation involving conflicting connections or obligations",
  "level": "general",
  "starred": false
 },
 {
  "id": 688,
  "word": "Culpability",
  "definition": "The degree to which someone is responsible or deserving of blame for a wrongdoing",
  "level": "general",
  "starred": false
 },
 {
  "id": 689,
  "word": "Forecast",
  "definition": "A prediction of future events based on current data or analysis",
  "level": "general",
  "starred": false
 },
 {
  "id": 690,
  "word": "Falsehood",
  "definition": "A statement or belief that is untrue; a lie",
  "level": "general",
  "starred": false
 },
 {
  "id": 691,
  "word": "Imitation",
  "definition": "The act of copying or replicating someone or something else",
  "level": "general",
  "starred": false
 },
 {
  "id": 692,
  "word": "Protested",
  "definition": "Expressed strong objection or disapproval of something publicly",
  "level": "general",
  "starred": false
 },
 {
  "id": 693,
  "word": "Confirmed",
  "definition": "Established the truth or certainty of something; validated",
  "level": "general",
  "starred": false
 },
 {
  "id": 694,
  "word": "Trickery",
  "definition": "The use of deceptive schemes or cunning acts to mislead others",
  "level": "general",
  "starred": false
 },
 {
  "id": 695,
  "word": "Underpinned",
  "definition": "Supported or strengthened something from beneath; provided a foundation for",
  "level": "general",
  "starred": false
 },
 {
  "id": 696,
  "word": "Surmounted",
  "definition": "Overcame a difficulty or obstacle through effort",
  "level": "general",
  "starred": false
 },
 {
  "id": 697,
  "word": "Subjugated",
  "definition": "Brought under control or domination through force or authority",
  "level": "general",
  "starred": false
 },
 {
  "id": 698,
  "word": "Mildly",
  "definition": "In a gentle or moderate manner; to a small degree",
  "level": "general",
  "starred": false
 },
 {
  "id": 699,
  "word": "Intention for",
  "definition": "A plan or aim directed toward something",
  "level": "general",
  "starred": false
 },
 {
  "id": 700,
  "word": "Captivate",
  "definition": "To attract and hold someone's attention completely; to charm",
  "level": "general",
  "starred": false
 },
 {
  "id": 701,
  "word": "Revert",
  "definition": "To return to a previous state, condition, or behavior",
  "level": "general",
  "starred": false
 },
 {
  "id": 702,
  "word": "Barricade",
  "definition": "To block or defend with a barrier; or such a barrier itself",
  "level": "general",
  "starred": false
 },
 {
  "id": 703,
  "word": "Compensate",
  "definition": "To make up for something; to repay or offset",
  "level": "general",
  "starred": false
 },
 {
  "id": 704,
  "word": "Consideration",
  "definition": "Careful thought, or thoughtful regard for others",
  "level": "general",
  "starred": false
 },
 {
  "id": 705,
  "word": "Admiration",
  "definition": "A feeling of respect and warm approval",
  "level": "general",
  "starred": false
 },
 {
  "id": 706,
  "word": "Indecision",
  "definition": "The inability to make a decision; hesitation",
  "level": "general",
  "starred": false
 },
 {
  "id": 707,
  "word": "Reflection",
  "definition": "Serious thought, or an image cast back by a surface",
  "level": "general",
  "starred": false
 },
 {
  "id": 708,
  "word": "Kindness",
  "definition": "The quality of being friendly, generous, and considerate",
  "level": "general",
  "starred": false
 },
 {
  "id": 709,
  "word": "Object",
  "definition": "A goal or purpose; or to express disapproval",
  "level": "general",
  "starred": false
 },
 {
  "id": 710,
  "word": "Astonishment",
  "definition": "Great surprise or amazement",
  "level": "general",
  "starred": false
 },
 {
  "id": 711,
  "word": "Regret",
  "definition": "A feeling of sorrow or disappointment over something",
  "level": "general",
  "starred": false
 },
 {
  "id": 712,
  "word": "Copied",
  "definition": "Reproduced or imitated something",
  "level": "general",
  "starred": false
 },
 {
  "id": 713,
  "word": "Debated",
  "definition": "Discussed or argued about a topic",
  "level": "general",
  "starred": false
 },
 {
  "id": 714,
  "word": "Blamed",
  "definition": "Held responsible for a fault or wrong",
  "level": "general",
  "starred": false
 },
 {
  "id": 715,
  "word": "Misunderstood",
  "definition": "Failed to interpret or understand correctly",
  "level": "general",
  "starred": false
 },
 {
  "id": 716,
  "word": "Applauded",
  "definition": "Praised or expressed approval, often by clapping",
  "level": "general",
  "starred": false
 },
 {
  "id": 717,
  "word": "Succession",
  "definition": "A series of people or things following one after another",
  "level": "general",
  "starred": false
 },
 {
  "id": 718,
  "word": "Convergence",
  "definition": "The act of coming together or meeting at a point",
  "level": "general",
  "starred": false
 },
 {
  "id": 719,
  "word": "Expiration",
  "definition": "The end or termination of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 720,
  "word": "Celebrate",
  "definition": "To mark an event with festivities or praise",
  "level": "general",
  "starred": false
 },
 {
  "id": 721,
  "word": "Combine",
  "definition": "To join or merge things together",
  "level": "general",
  "starred": false
 },
 {
  "id": 722,
  "word": "Invent",
  "definition": "To create or design something new",
  "level": "general",
  "starred": false
 },
 {
  "id": 723,
  "word": "Withhold",
  "definition": "To hold back or refuse to give",
  "level": "general",
  "starred": false
 },
 {
  "id": 724,
  "word": "Deferred to",
  "definition": "Yielded or submitted to another's wishes or authority",
  "level": "general",
  "starred": false
 },
 {
  "id": 725,
  "word": "Intermingled with",
  "definition": "Mixed or blended together with",
  "level": "general",
  "starred": false
 },
 {
  "id": 726,
  "word": "Corresponded to",
  "definition": "Matched or was equivalent to",
  "level": "general",
  "starred": false
 },
 {
  "id": 727,
  "word": "Advocated for",
  "definition": "Publicly supported or argued in favor of",
  "level": "general",
  "starred": false
 },
 {
  "id": 728,
  "word": "Contrivances of",
  "definition": "Artificial devices, schemes, or inventions belonging to",
  "level": "general",
  "starred": false
 },
 {
  "id": 729,
  "word": "Deterrents to",
  "definition": "Things that discourage or prevent",
  "level": "general",
  "starred": false
 },
 {
  "id": 730,
  "word": "Acquiesced",
  "definition": "Accepted or agreed reluctantly, without protest",
  "level": "general",
  "starred": false
 },
 {
  "id": 731,
  "word": "Oscillated",
  "definition": "Moved back and forth; wavered between positions",
  "level": "general",
  "starred": false
 },
 {
  "id": 732,
  "word": "Abated",
  "definition": "Lessened in intensity; subsided",
  "level": "general",
  "starred": false
 },
 {
  "id": 733,
  "word": "Gather",
  "definition": "To collect or bring together",
  "level": "general",
  "starred": false
 },
 {
  "id": 734,
  "word": "Gain",
  "definition": "To obtain or acquire; to increase",
  "level": "general",
  "starred": false
 },
 {
  "id": 735,
  "word": "Confusion about",
  "definition": "A lack of understanding or clarity regarding",
  "level": "general",
  "starred": false
 },
 {
  "id": 736,
  "word": "Acknowledged in",
  "definition": "Recognized or admitted within a context",
  "level": "general",
  "starred": false
 },
 {
  "id": 737,
  "word": "Prompted by",
  "definition": "Caused or triggered by",
  "level": "general",
  "starred": false
 },
 {
  "id": 738,
  "word": "Irrespective of",
  "definition": "Without regard to; regardless of",
  "level": "general",
  "starred": false
 },
 {
  "id": 739,
  "word": "Predictive of",
  "definition": "Serving to indicate or forecast",
  "level": "general",
  "starred": false
 },
 {
  "id": 740,
  "word": "Thrive",
  "definition": "To grow or develop vigorously; to flourish",
  "level": "general",
  "starred": false
 },
 {
  "id": 741,
  "word": "Disperse",
  "definition": "To scatter or spread over a wide area",
  "level": "general",
  "starred": false
 },
 {
  "id": 742,
  "word": "Ebb",
  "definition": "To decline or recede; or the receding of the tide",
  "level": "general",
  "starred": false
 },
 {
  "id": 743,
  "word": "Overspend",
  "definition": "To spend more than one can afford or intends",
  "level": "general",
  "starred": false
 },
 {
  "id": 744,
  "word": "Justify",
  "definition": "To show or prove to be right or reasonable",
  "level": "general",
  "starred": false
 },
 {
  "id": 745,
  "word": "Mention",
  "definition": "To refer to briefly",
  "level": "general",
  "starred": false
 },
 {
  "id": 746,
  "word": "Restore",
  "definition": "To bring back to a former condition",
  "level": "general",
  "starred": false
 },
 {
  "id": 747,
  "word": "Waste",
  "definition": "To use carelessly or squander",
  "level": "general",
  "starred": false
 },
 {
  "id": 748,
  "word": "Rewards",
  "definition": "Things given in recognition of effort or achievement",
  "level": "general",
  "starred": false
 },
 {
  "id": 749,
  "word": "Subverted by",
  "definition": "Undermined or overturned by",
  "level": "general",
  "starred": false
 },
 {
  "id": 750,
  "word": "Excluded from",
  "definition": "Kept out of or left out of a group or place",
  "level": "general",
  "starred": false
 },
 {
  "id": 751,
  "word": "Retrieve",
  "definition": "To get back or recover something",
  "level": "general",
  "starred": false
 },
 {
  "id": 752,
  "word": "Articulate",
  "definition": "expressing ideas clearly and effectively",
  "level": "general",
  "starred": false
 },
 {
  "id": 753,
  "word": "Attenuate",
  "definition": "to reduce the force, effect, or value of something; weaken",
  "level": "general",
  "starred": false
 },
 {
  "id": 754,
  "word": "Authoritative",
  "definition": "reliable and commanding respect; based on solid expertise",
  "level": "general",
  "starred": false
 },
 {
  "id": 755,
  "word": "Caricature",
  "definition": "to portray in a deliberately exaggerated, comic way",
  "level": "general",
  "starred": false
 },
 {
  "id": 756,
  "word": "Catalyst",
  "definition": "something that causes or speeds up an event or change",
  "level": "general",
  "starred": false
 },
 {
  "id": 757,
  "word": "Clandestine",
  "definition": "kept secret, especially because it is illicit",
  "level": "general",
  "starred": false
 },
 {
  "id": 758,
  "word": "Collapse",
  "definition": "to fall down or break apart suddenly; to fail",
  "level": "general",
  "starred": false
 },
 {
  "id": 759,
  "word": "Complementary",
  "definition": "combining so as to enhance or complete each other",
  "level": "general",
  "starred": false
 },
 {
  "id": 760,
  "word": "Constraint",
  "definition": "a limitation or restriction",
  "level": "general",
  "starred": false
 },
 {
  "id": 761,
  "word": "Continuum",
  "definition": "a continuous sequence with no clear dividing points",
  "level": "general",
  "starred": false
 },
 {
  "id": 762,
  "word": "Dependent",
  "definition": "relying on someone or something for support",
  "level": "general",
  "starred": false
 },
 {
  "id": 763,
  "word": "Detect",
  "definition": "to discover or identify the presence of",
  "level": "general",
  "starred": false
 },
 {
  "id": 764,
  "word": "Disingenuous",
  "definition": "not sincere; pretending to know less than one does",
  "level": "general",
  "starred": false
 },
 {
  "id": 765,
  "word": "Displace",
  "definition": "to force out of position; to replace",
  "level": "general",
  "starred": false
 },
 {
  "id": 766,
  "word": "Disruption",
  "definition": "a disturbance that interrupts an activity or process",
  "level": "general",
  "starred": false
 },
 {
  "id": 767,
  "word": "Disturb",
  "definition": "to interfere with; to upset or unsettle",
  "level": "general",
  "starred": false
 },
 {
  "id": 768,
  "word": "Diversion",
  "definition": "a turning aside from a course; a distraction",
  "level": "general",
  "starred": false
 },
 {
  "id": 769,
  "word": "Eschew",
  "definition": "to deliberately avoid or abstain from",
  "level": "general",
  "starred": false
 },
 {
  "id": 770,
  "word": "Esoteric",
  "definition": "understood by only a small group with specialized knowledge",
  "level": "general",
  "starred": false
 },
 {
  "id": 771,
  "word": "Exceed",
  "definition": "to be greater than; to surpass",
  "level": "general",
  "starred": false
 },
 {
  "id": 772,
  "word": "Expound",
  "definition": "to explain in detail",
  "level": "general",
  "starred": false
 },
 {
  "id": 773,
  "word": "Extend",
  "definition": "to stretch out, enlarge, or prolong",
  "level": "general",
  "starred": false
 },
 {
  "id": 774,
  "word": "Iconoclastic",
  "definition": "attacking cherished beliefs or established institutions",
  "level": "general",
  "starred": false
 },
 {
  "id": 775,
  "word": "Identical",
  "definition": "exactly alike",
  "level": "general",
  "starred": false
 },
 {
  "id": 776,
  "word": "Imply",
  "definition": "to suggest something indirectly",
  "level": "general",
  "starred": false
 },
 {
  "id": 777,
  "word": "Inattentive",
  "definition": "not paying attention",
  "level": "general",
  "starred": false
 },
 {
  "id": 778,
  "word": "Incompatibility",
  "definition": "the state of being unable to coexist or work together",
  "level": "general",
  "starred": false
 },
 {
  "id": 779,
  "word": "Incongruity",
  "definition": "a lack of harmony or consistency; something out of place",
  "level": "general",
  "starred": false
 },
 {
  "id": 780,
  "word": "Inconsistency",
  "definition": "a lack of uniformity; a discrepancy",
  "level": "general",
  "starred": false
 },
 {
  "id": 781,
  "word": "Interplay",
  "definition": "the way two or more things interact or affect each other",
  "level": "general",
  "starred": false
 },
 {
  "id": 782,
  "word": "Investigate",
  "definition": "to examine systematically",
  "level": "general",
  "starred": false
 },
 {
  "id": 783,
  "word": "Laugh",
  "definition": "to express amusement",
  "level": "general",
  "starred": false
 },
 {
  "id": 784,
  "word": "Malign",
  "definition": "to speak harmful untruths about; defame",
  "level": "general",
  "starred": false
 },
 {
  "id": 785,
  "word": "Portend",
  "definition": "to be a sign or warning of something to come",
  "level": "general",
  "starred": false
 },
 {
  "id": 786,
  "word": "Preempt",
  "definition": "to act in advance to prevent or forestall; to take ahead of others",
  "level": "general",
  "starred": false
 },
 {
  "id": 787,
  "word": "Prefigure",
  "definition": "to be an early indication or model of",
  "level": "general",
  "starred": false
 },
 {
  "id": 788,
  "word": "Preliminary",
  "definition": "coming before the main part; introductory",
  "level": "general",
  "starred": false
 },
 {
  "id": 789,
  "word": "Preoccupied",
  "definition": "absorbed in thought; engrossed",
  "level": "general",
  "starred": false
 },
 {
  "id": 790,
  "word": "Prescient",
  "definition": "knowing or anticipating events before they happen",
  "level": "general",
  "starred": false
 },
 {
  "id": 791,
  "word": "Promote",
  "definition": "to further the progress of; to advance",
  "level": "general",
  "starred": false
 },
 {
  "id": 792,
  "word": "Redundant",
  "definition": "not needed because superfluous or repetitive",
  "level": "general",
  "starred": false
 },
 {
  "id": 793,
  "word": "Restraint",
  "definition": "a measure that limits or controls; self-control",
  "level": "general",
  "starred": false
 },
 {
  "id": 794,
  "word": "Scatter",
  "definition": "to throw or spread in various directions",
  "level": "general",
  "starred": false
 },
 {
  "id": 795,
  "word": "Speculative",
  "definition": "based on conjecture rather than firm knowledge",
  "level": "general",
  "starred": false
 },
 {
  "id": 796,
  "word": "Sponsor",
  "definition": "one who funds or supports; to support or fund",
  "level": "general",
  "starred": false
 },
 {
  "id": 797,
  "word": "Subsume",
  "definition": "to include or absorb into something larger",
  "level": "general",
  "starred": false
 },
 {
  "id": 798,
  "word": "Succinct",
  "definition": "briefly and clearly expressed",
  "level": "general",
  "starred": false
 },
 {
  "id": 799,
  "word": "Surreptitious",
  "definition": "done secretly to avoid notice",
  "level": "general",
  "starred": false
 },
 {
  "id": 800,
  "word": "Tension",
  "definition": "a strained state; opposition between forces",
  "level": "general",
  "starred": false
 },
 {
  "id": 801,
  "word": "Thwart",
  "definition": "to prevent from succeeding; to frustrate",
  "level": "general",
  "starred": false
 },
 {
  "id": 802,
  "word": "Unavailable",
  "definition": "not able to be obtained or used",
  "level": "general",
  "starred": false
 },
 {
  "id": 803,
  "word": "Unknown",
  "definition": "not known, identified, or discovered",
  "level": "general",
  "starred": false
 },
 {
  "id": 804,
  "word": "Warrant",
  "definition": "to justify or make necessary; to authorize",
  "level": "general",
  "starred": false
 },
 {
  "id": 805,
  "word": "Absorbs",
  "definition": "takes in or receives something (information, impact, etc.)",
  "level": "general",
  "starred": false
 },
 {
  "id": 806,
  "word": "Activate",
  "definition": "to cause something to begin working or functioning",
  "level": "general",
  "starred": false
 },
 {
  "id": 807,
  "word": "Amend",
  "definition": "to make changes or improvements to something, especially a document or law",
  "level": "general",
  "starred": false
 },
 {
  "id": 808,
  "word": "Appeal (to)",
  "definition": "to attract, interest, or be relevant to someone",
  "level": "general",
  "starred": false
 },
 {
  "id": 809,
  "word": "Apparent",
  "definition": "clearly visible or easily understood; obvious",
  "level": "general",
  "starred": false
 },
 {
  "id": 810,
  "word": "Approved",
  "definition": "officially accepted or agreed upon; endorsed",
  "level": "general",
  "starred": false
 },
 {
  "id": 811,
  "word": "Ascribed",
  "definition": "attributed or assigned to a particular person, cause, or source",
  "level": "general",
  "starred": false
 },
 {
  "id": 812,
  "word": "Assigned",
  "definition": "given a particular task, role, or meaning; allocated",
  "level": "general",
  "starred": false
 },
 {
  "id": 813,
  "word": "Bewilder",
  "definition": "to cause someone to feel confused or puzzled; to perplex",
  "level": "general",
  "starred": false
 },
 {
  "id": 814,
  "word": "Brightest",
  "definition": "having the most light; most intelligent or vivid",
  "level": "general",
  "starred": false
 },
 {
  "id": 815,
  "word": "Characterizes",
  "definition": "describes the typical or defining features of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 816,
  "word": "Complexity",
  "definition": "the state of having many interconnected parts; being intricate or hard to understand",
  "level": "general",
  "starred": false
 },
 {
  "id": 817,
  "word": "Convened",
  "definition": "called together for a formal meeting or assembly; assembled",
  "level": "general",
  "starred": false
 },
 {
  "id": 818,
  "word": "Converted (by)",
  "definition": "changed in form, character, or function",
  "level": "general",
  "starred": false
 },
 {
  "id": 819,
  "word": "Debunked",
  "definition": "exposed as false, exaggerated, or without basis; disproved",
  "level": "general",
  "starred": false
 },
 {
  "id": 820,
  "word": "Decide",
  "definition": "to make a choice between options; to reach a conclusion",
  "level": "general",
  "starred": false
 },
 {
  "id": 821,
  "word": "Decimate",
  "definition": "to destroy or drastically reduce a large portion of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 822,
  "word": "Deny",
  "definition": "to refuse to accept as true; to say something is not the case",
  "level": "general",
  "starred": false
 },
 {
  "id": 823,
  "word": "Detected",
  "definition": "discovered or identified something that was not immediately obvious",
  "level": "general",
  "starred": false
 },
 {
  "id": 824,
  "word": "Efface",
  "definition": "to erase, remove, or cause something to fade away and become invisible",
  "level": "general",
  "starred": false
 },
 {
  "id": 825,
  "word": "Employed",
  "definition": "used or put into service for a purpose; also: hired for work",
  "level": "general",
  "starred": false
 },
 {
  "id": 826,
  "word": "Essential",
  "definition": "absolutely necessary; extremely important; fundamental",
  "level": "general",
  "starred": false
 },
 {
  "id": 827,
  "word": "Evaluate",
  "definition": "to assess or judge the value, quality, or importance of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 828,
  "word": "Examined",
  "definition": "inspected closely and carefully; studied or analyzed in detail",
  "level": "general",
  "starred": false
 },
 {
  "id": 829,
  "word": "Excessive",
  "definition": "more than what is necessary or reasonable; too much",
  "level": "general",
  "starred": false
 },
 {
  "id": 830,
  "word": "Expand",
  "definition": "to increase in size, scope, or detail; to grow larger",
  "level": "general",
  "starred": false
 },
 {
  "id": 831,
  "word": "Expense",
  "definition": "the cost required for something; financial outlay",
  "level": "general",
  "starred": false
 },
 {
  "id": 832,
  "word": "Farthest",
  "definition": "at the greatest distance; most remote",
  "level": "general",
  "starred": false
 },
 {
  "id": 833,
  "word": "Foregrounding",
  "definition": "bringing something forward as the main focus; making it prominent",
  "level": "general",
  "starred": false
 },
 {
  "id": 834,
  "word": "Function",
  "definition": "to work or operate properly; to serve a specific purpose",
  "level": "general",
  "starred": false
 },
 {
  "id": 835,
  "word": "Guaranteed",
  "definition": "assured with certainty; promised or secured",
  "level": "general",
  "starred": false
 },
 {
  "id": 836,
  "word": "Hypothesized",
  "definition": "proposed as a possible explanation based on limited evidence; theorized",
  "level": "general",
  "starred": false
 },
 {
  "id": 837,
  "word": "Improve",
  "definition": "to make or become better than before",
  "level": "general",
  "starred": false
 },
 {
  "id": 838,
  "word": "Indecipherable",
  "definition": "impossible to read, understand, or decode",
  "level": "general",
  "starred": false
 },
 {
  "id": 839,
  "word": "Justifiable",
  "definition": "able to be shown as reasonable, right, or defensible",
  "level": "general",
  "starred": false
 },
 {
  "id": 840,
  "word": "Knowledgeable (about)",
  "definition": "having thorough understanding and expertise in a subject",
  "level": "general",
  "starred": false
 },
 {
  "id": 841,
  "word": "Lifts",
  "definition": "raises upward; can also mean places or puts (e.g., lifts a signature onto something)",
  "level": "general",
  "starred": false
 },
 {
  "id": 842,
  "word": "Misconstrue",
  "definition": "to interpret something incorrectly; to misunderstand the meaning or intention",
  "level": "general",
  "starred": true
 },
 {
  "id": 843,
  "word": "Mistook",
  "definition": "incorrectly identified or understood something; past tense of",
  "level": "general",
  "starred": false
 },
 {
  "id": 844,
  "word": "Modified",
  "definition": "changed or adjusted slightly without fundamentally altering",
  "level": "general",
  "starred": false
 },
 {
  "id": 845,
  "word": "Motivated",
  "definition": "driven by a reason, desire, or incentive to act",
  "level": "general",
  "starred": false
 },
 {
  "id": 846,
  "word": "Organized",
  "definition": "arranged in a systematic or orderly way; structured",
  "level": "general",
  "starred": false
 },
 {
  "id": 847,
  "word": "Overheard",
  "definition": "heard accidentally a conversation not intended for you",
  "level": "general",
  "starred": false
 },
 {
  "id": 848,
  "word": "Polarizing",
  "definition": "causing people to divide strongly into opposing camps; highly divisive",
  "level": "general",
  "starred": false
 },
 {
  "id": 849,
  "word": "Precarious",
  "definition": "not safe or stable; dependent on uncertain conditions; risky",
  "level": "general",
  "starred": false
 },
 {
  "id": 850,
  "word": "Predictable",
  "definition": "able to be anticipated or foreseen; happening as expected",
  "level": "general",
  "starred": false
 },
 {
  "id": 851,
  "word": "Preserved",
  "definition": "kept intact and protected from damage or loss over time",
  "level": "general",
  "starred": false
 },
 {
  "id": 852,
  "word": "Profusion",
  "definition": "a large abundance or quantity of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 853,
  "word": "Punished",
  "definition": "made to suffer consequences for wrongdoing or a mistake",
  "level": "general",
  "starred": false
 },
 {
  "id": 854,
  "word": "Rejects",
  "definition": "refuses to accept, believe, or consider something",
  "level": "general",
  "starred": false
 },
 {
  "id": 855,
  "word": "Relaxes",
  "definition": "becomes less tense or strict; eases up",
  "level": "general",
  "starred": false
 },
 {
  "id": 856,
  "word": "Revealed",
  "definition": "made known something that was previously hidden or secret",
  "level": "general",
  "starred": false
 },
 {
  "id": 857,
  "word": "Salvage",
  "definition": "to rescue or recover something from loss, damage, or failure",
  "level": "general",
  "starred": false
 },
 {
  "id": 858,
  "word": "Separate",
  "definition": "to set or keep apart; to divide into distinct parts",
  "level": "general",
  "starred": false
 },
 {
  "id": 859,
  "word": "Suspects",
  "definition": "believes something is likely or probable, often with some doubt",
  "level": "general",
  "starred": false
 },
 {
  "id": 860,
  "word": "Switches",
  "definition": "changes from one thing to another; shifts direction or focus",
  "level": "general",
  "starred": false
 },
 {
  "id": 861,
  "word": "Transcends",
  "definition": "goes beyond the limits or scope of; surpasses",
  "level": "general",
  "starred": false
 },
 {
  "id": 862,
  "word": "Transformed",
  "definition": "changed greatly in form, nature, appearance, or character",
  "level": "general",
  "starred": false
 },
 {
  "id": 863,
  "word": "Traverse",
  "definition": "to travel across or through a place or area",
  "level": "general",
  "starred": false
 },
 {
  "id": 864,
  "word": "Unity",
  "definition": "the state of being united or working together as a whole; harmony",
  "level": "general",
  "starred": false
 },
 {
  "id": 865,
  "word": "Unusual",
  "definition": "not common; different from what is typical or expected",
  "level": "general",
  "starred": false
 },
 {
  "id": 866,
  "word": "Variability",
  "definition": "the tendency to change or vary; lack of consistency or uniformity",
  "level": "general",
  "starred": false
 },
 {
  "id": 867,
  "word": "Abiding",
  "definition": "lasting for a long time; enduring",
  "level": "general",
  "starred": false
 },
 {
  "id": 868,
  "word": "Adaptability",
  "definition": "the ability to adjust to new conditions",
  "level": "general",
  "starred": false
 },
 {
  "id": 869,
  "word": "Aesthetic",
  "definition": "concerned with beauty or the appreciation of art",
  "level": "general",
  "starred": false
 },
 {
  "id": 870,
  "word": "Altered",
  "definition": "changed or modified",
  "level": "general",
  "starred": false
 },
 {
  "id": 871,
  "word": "Analogical",
  "definition": "based on or using analogy; drawing comparisons",
  "level": "general",
  "starred": false
 },
 {
  "id": 872,
  "word": "Anecdotal",
  "definition": "based on personal accounts rather than systematic evidence",
  "level": "general",
  "starred": false
 },
 {
  "id": 873,
  "word": "Arrives",
  "definition": "reaches a destination; comes to a place",
  "level": "general",
  "starred": false
 },
 {
  "id": 874,
  "word": "Assurances",
  "definition": "promises or guarantees",
  "level": "general",
  "starred": false
 },
 {
  "id": 875,
  "word": "Authenticated by",
  "definition": "verified as genuine by",
  "level": "general",
  "starred": false
 },
 {
  "id": 876,
  "word": "Circled",
  "definition": "moved in a ring around; enclosed",
  "level": "general",
  "starred": false
 },
 {
  "id": 877,
  "word": "Circumscribed",
  "definition": "restricted or limited within boundaries",
  "level": "general",
  "starred": false
 },
 {
  "id": 878,
  "word": "Complicate",
  "definition": "make more complex or difficult",
  "level": "general",
  "starred": false
 },
 {
  "id": 879,
  "word": "Composure",
  "definition": "calmness of manner; self-control",
  "level": "general",
  "starred": false
 },
 {
  "id": 880,
  "word": "Concentrated among",
  "definition": "gathered or clustered within a group",
  "level": "general",
  "starred": false
 },
 {
  "id": 881,
  "word": "Conclusive",
  "definition": "decisive and definitive; settling a question",
  "level": "general",
  "starred": false
 },
 {
  "id": 882,
  "word": "Confidentiality",
  "definition": "the state of keeping information private",
  "level": "general",
  "starred": false
 },
 {
  "id": 883,
  "word": "Confusing",
  "definition": "causing bewilderment; difficult to understand",
  "level": "general",
  "starred": false
 },
 {
  "id": 884,
  "word": "Congratulating",
  "definition": "expressing praise or pleasure at someone's success",
  "level": "general",
  "starred": false
 },
 {
  "id": 885,
  "word": "Contemporary with",
  "definition": "existing or occurring at the same time as",
  "level": "general",
  "starred": false
 },
 {
  "id": 886,
  "word": "Controlling",
  "definition": "exercising power or authority over; regulating",
  "level": "general",
  "starred": false
 },
 {
  "id": 887,
  "word": "Cryptic",
  "definition": "having a hidden or ambiguous meaning; mysterious",
  "level": "general",
  "starred": false
 },
 {
  "id": 888,
  "word": "Delete",
  "definition": "remove or eliminate",
  "level": "general",
  "starred": false
 },
 {
  "id": 889,
  "word": "Derivative",
  "definition": "imitative of another's work; not original",
  "level": "general",
  "starred": false
 },
 {
  "id": 890,
  "word": "Desired",
  "definition": "wanted; wished for",
  "level": "general",
  "starred": false
 },
 {
  "id": 891,
  "word": "Deter",
  "definition": "discourage from acting; prevent",
  "level": "general",
  "starred": false
 },
 {
  "id": 892,
  "word": "Dissociated with",
  "definition": "separated or disconnected from",
  "level": "general",
  "starred": false
 },
 {
  "id": 893,
  "word": "Distinguished",
  "definition": "notably excellent; set apart from others",
  "level": "general",
  "starred": false
 },
 {
  "id": 894,
  "word": "Erase",
  "definition": "remove completely; wipe out",
  "level": "general",
  "starred": false
 },
 {
  "id": 895,
  "word": "Examination",
  "definition": "a detailed inspection or study",
  "level": "general",
  "starred": false
 },
 {
  "id": 896,
  "word": "Excising",
  "definition": "removing by cutting out",
  "level": "general",
  "starred": false
 },
 {
  "id": 897,
  "word": "Exuberant",
  "definition": "showing great energy and enthusiasm",
  "level": "general",
  "starred": false
 },
 {
  "id": 898,
  "word": "Forbearance",
  "definition": "patient restraint; tolerance",
  "level": "general",
  "starred": false
 },
 {
  "id": 899,
  "word": "Forensic",
  "definition": "relating to the use of scientific methods in investigation",
  "level": "general",
  "starred": false
 },
 {
  "id": 900,
  "word": "Gregariousness",
  "definition": "the quality of enjoying the company of others; sociability",
  "level": "general",
  "starred": false
 },
 {
  "id": 901,
  "word": "Habituated to",
  "definition": "made accustomed to through repeated exposure",
  "level": "general",
  "starred": false
 },
 {
  "id": 902,
  "word": "Halt",
  "definition": "stop; bring to an end",
  "level": "general",
  "starred": false
 },
 {
  "id": 903,
  "word": "Harming",
  "definition": "causing physical or psychological damage to",
  "level": "general",
  "starred": false
 },
 {
  "id": 904,
  "word": "Haughty",
  "definition": "arrogantly superior; disdainful",
  "level": "general",
  "starred": false
 },
 {
  "id": 905,
  "word": "Helpful to",
  "definition": "providing assistance or benefit to",
  "level": "general",
  "starred": false
 },
 {
  "id": 906,
  "word": "Hitting",
  "definition": "striking; coming into contact with force",
  "level": "general",
  "starred": false
 },
 {
  "id": 907,
  "word": "Hostile to",
  "definition": "opposed to; unfriendly toward",
  "level": "general",
  "starred": false
 },
 {
  "id": 908,
  "word": "Humorous",
  "definition": "causing laughter or amusement; funny",
  "level": "general",
  "starred": false
 },
 {
  "id": 909,
  "word": "Illuminating",
  "definition": "helping to clarify; enlightening",
  "level": "general",
  "starred": false
 },
 {
  "id": 910,
  "word": "Inaccessible",
  "definition": "not able to be reached or understood",
  "level": "general",
  "starred": false
 },
 {
  "id": 911,
  "word": "Instigate",
  "definition": "bring about by incitement; provoke",
  "level": "general",
  "starred": false
 },
 {
  "id": 912,
  "word": "Localized",
  "definition": "restricted to a particular area",
  "level": "general",
  "starred": false
 },
 {
  "id": 913,
  "word": "Methods",
  "definition": "ways of doing something; procedures",
  "level": "general",
  "starred": false
 },
 {
  "id": 914,
  "word": "Misgiving",
  "definition": "a feeling of doubt or apprehension",
  "level": "general",
  "starred": false
 },
 {
  "id": 915,
  "word": "Misjudge",
  "definition": "form a wrong opinion of; assess incorrectly",
  "level": "general",
  "starred": false
 },
 {
  "id": 916,
  "word": "Modesty",
  "definition": "the quality of not boasting about one's abilities; humility",
  "level": "general",
  "starred": false
 },
 {
  "id": 917,
  "word": "Multifaceted",
  "definition": "having many different aspects or features",
  "level": "general",
  "starred": false
 },
 {
  "id": 918,
  "word": "Obsolete",
  "definition": "no longer in use; outdated",
  "level": "general",
  "starred": false
 },
 {
  "id": 919,
  "word": "Occluded by",
  "definition": "blocked or obstructed by",
  "level": "general",
  "starred": false
 },
 {
  "id": 920,
  "word": "Partisan",
  "definition": "strongly supporting a particular cause or group; biased",
  "level": "general",
  "starred": false
 },
 {
  "id": 921,
  "word": "Persists",
  "definition": "continues to exist or occur; endures",
  "level": "general",
  "starred": false
 },
 {
  "id": 922,
  "word": "Presupposing",
  "definition": "assuming beforehand; taking for granted",
  "level": "general",
  "starred": false
 },
 {
  "id": 923,
  "word": "Prevalent",
  "definition": "widespread; commonly occurring",
  "level": "general",
  "starred": false
 },
 {
  "id": 924,
  "word": "Proprietary",
  "definition": "relating to an owner; privately owned",
  "level": "general",
  "starred": false
 },
 {
  "id": 925,
  "word": "Purchases",
  "definition": "buys; acquires in exchange for payment",
  "level": "general",
  "starred": false
 },
 {
  "id": 926,
  "word": "Regression",
  "definition": "a return to an earlier or less advanced state",
  "level": "general",
  "starred": false
 },
 {
  "id": 927,
  "word": "Regulate",
  "definition": "control or supervise by rules; adjust",
  "level": "general",
  "starred": false
 },
 {
  "id": 928,
  "word": "Responds",
  "definition": "reacts to; gives an answer",
  "level": "general",
  "starred": false
 },
 {
  "id": 929,
  "word": "Responsibility",
  "definition": "the state of having a duty to deal with something",
  "level": "general",
  "starred": false
 },
 {
  "id": 930,
  "word": "Retrospective",
  "definition": "looking back on the past",
  "level": "general",
  "starred": false
 },
 {
  "id": 931,
  "word": "Reuse",
  "definition": "use again",
  "level": "general",
  "starred": false
 },
 {
  "id": 932,
  "word": "Rooted in",
  "definition": "having its origin in; based on",
  "level": "general",
  "starred": false
 },
 {
  "id": 933,
  "word": "Seasonal",
  "definition": "relating to or typical of a particular season",
  "level": "general",
  "starred": false
 },
 {
  "id": 934,
  "word": "Secretive",
  "definition": "inclined to conceal feelings or information",
  "level": "general",
  "starred": false
 },
 {
  "id": 935,
  "word": "Sorrows",
  "definition": "feelings of deep distress; causes of grief",
  "level": "general",
  "starred": false
 },
 {
  "id": 936,
  "word": "Suggests",
  "definition": "implies; proposes",
  "level": "general",
  "starred": false
 },
 {
  "id": 937,
  "word": "Supply",
  "definition": "provide with something needed; stock",
  "level": "general",
  "starred": false
 },
 {
  "id": 938,
  "word": "Tantamount to",
  "definition": "equivalent in effect or value to",
  "level": "general",
  "starred": false
 },
 {
  "id": 939,
  "word": "Theoretical",
  "definition": "concerned with theory rather than practical application",
  "level": "general",
  "starred": false
 },
 {
  "id": 940,
  "word": "Unaware of",
  "definition": "not knowing about; ignorant of",
  "level": "general",
  "starred": false
 },
 {
  "id": 941,
  "word": "Undiscerning",
  "definition": "lacking judgment or taste; not perceptive",
  "level": "general",
  "starred": false
 },
 {
  "id": 942,
  "word": "Unravel",
  "definition": "undo or disentangle; solve or clarify",
  "level": "general",
  "starred": false
 },
 {
  "id": 943,
  "word": "Voracity",
  "definition": "the quality of having a very eager appetite; greediness",
  "level": "general",
  "starred": false
 },
 {
  "id": 944,
  "word": "Deplete",
  "definition": "use up; reduce significantly",
  "level": "general",
  "starred": false
 },
 {
  "id": 945,
  "word": "Describing",
  "definition": "giving an account of; representing in words",
  "level": "general",
  "starred": false
 },
 {
  "id": 946,
  "word": "Imitations of",
  "definition": "copies or likenesses of",
  "level": "general",
  "starred": false
 },
 {
  "id": 947,
  "word": "Instructing",
  "definition": "directing or commanding; teaching",
  "level": "general",
  "starred": false
 },
 {
  "id": 948,
  "word": "Misunderstandings of",
  "definition": "incorrect interpretations of",
  "level": "general",
  "starred": false
 },
 {
  "id": 949,
  "word": "Satisfying",
  "definition": "fulfilling a need or desire; pleasing",
  "level": "general",
  "starred": false
 },
 {
  "id": 950,
  "word": "Squander",
  "definition": "waste resources in a reckless manner",
  "level": "general",
  "starred": false
 },
 {
  "id": 951,
  "word": "Affluent",
  "definition": "having a great deal of money; wealthy",
  "level": "general",
  "starred": false
 },
 {
  "id": 952,
  "word": "Aggressive",
  "definition": "ready to attack or confront; forceful",
  "level": "general",
  "starred": false
 },
 {
  "id": 953,
  "word": "Authoritarian",
  "definition": "favoring strict obedience to authority over personal freedom",
  "level": "general",
  "starred": false
 },
 {
  "id": 954,
  "word": "Bohemian",
  "definition": "unconventional in lifestyle and artistic; nonconformist",
  "level": "general",
  "starred": false
 },
 {
  "id": 955,
  "word": "Bolster",
  "definition": "strengthen or support",
  "level": "general",
  "starred": false
 },
 {
  "id": 956,
  "word": "Candid",
  "definition": "truthful and straightforward; frank",
  "level": "general",
  "starred": false
 },
 {
  "id": 957,
  "word": "Contemporary",
  "definition": "living or occurring at the same time; modern",
  "level": "general",
  "starred": false
 },
 {
  "id": 958,
  "word": "Convoluted",
  "definition": "extremely complex and difficult to follow; intricate",
  "level": "general",
  "starred": false
 },
 {
  "id": 959,
  "word": "Detrimental",
  "definition": "causing harm or damage; damaging",
  "level": "general",
  "starred": false
 },
 {
  "id": 960,
  "word": "Discovered",
  "definition": "found or learned for the first time",
  "level": "general",
  "starred": false
 },
 {
  "id": 961,
  "word": "Disguise",
  "definition": "conceal the identity or nature of; camouflage",
  "level": "general",
  "starred": false
 },
 {
  "id": 962,
  "word": "Dismantle",
  "definition": "take apart; systematically destroy",
  "level": "general",
  "starred": false
 },
 {
  "id": 963,
  "word": "Enforce",
  "definition": "compel compliance with; impose by authority",
  "level": "general",
  "starred": false
 },
 {
  "id": 964,
  "word": "Expedite",
  "definition": "make something happen sooner; speed up",
  "level": "general",
  "starred": false
 },
 {
  "id": 965,
  "word": "Fabricated",
  "definition": "invented or made up; not genuine",
  "level": "general",
  "starred": false
 },
 {
  "id": 966,
  "word": "Oversimplify",
  "definition": "explain in an overly simple way, distorting the truth",
  "level": "general",
  "starred": false
 },
 {
  "id": 967,
  "word": "Praise",
  "definition": "express approval or admiration of",
  "level": "general",
  "starred": false
 },
 {
  "id": 968,
  "word": "Prolong",
  "definition": "extend the duration of; lengthen",
  "level": "general",
  "starred": false
 },
 {
  "id": 969,
  "word": "Refined",
  "definition": "elegant and cultured; improved by removing imperfections",
  "level": "general",
  "starred": false
 },
 {
  "id": 970,
  "word": "Resemble",
  "definition": "look or be like; have similarities to",
  "level": "general",
  "starred": false
 },
 {
  "id": 971,
  "word": "Resilient",
  "definition": "able to recover quickly from difficulties; tough",
  "level": "general",
  "starred": false
 },
 {
  "id": 972,
  "word": "Resolved",
  "definition": "settled or found a solution to",
  "level": "general",
  "starred": false
 },
 {
  "id": 973,
  "word": "Restrain",
  "definition": "prevent from doing something; hold back",
  "level": "general",
  "starred": false
 },
 {
  "id": 974,
  "word": "Sculpts",
  "definition": "carves or shapes a material into a form",
  "level": "general",
  "starred": false
 },
 {
  "id": 975,
  "word": "Shape",
  "definition": "give a form to; influence the development of",
  "level": "general",
  "starred": false
 },
 {
  "id": 976,
  "word": "Tangible",
  "definition": "perceptible by touch; clear and definite; real",
  "level": "general",
  "starred": false
 },
 {
  "id": 977,
  "word": "Therapeutic",
  "definition": "having a healing or beneficial effect",
  "level": "general",
  "starred": false
 },
 {
  "id": 978,
  "word": "Vestigial",
  "definition": "remaining as a trace of something that has mostly disappeared",
  "level": "general",
  "starred": false
 },
 {
  "id": 979,
  "word": "Volatile",
  "definition": "liable to change rapidly; unstable",
  "level": "general",
  "starred": false
 },
 {
  "id": 980,
  "word": "Mentorship",
  "definition": "guidance given by an experienced person to a less experienced one",
  "level": "general",
  "starred": false
 },
 {
  "id": 981,
  "word": "Craftsmanship",
  "definition": "skill and care in making something; quality of workmanship",
  "level": "general",
  "starred": false
 },
 {
  "id": 982,
  "word": "Certification",
  "definition": "official confirmation of a qualification or status",
  "level": "general",
  "starred": false
 },
 {
  "id": 983,
  "word": "Prepared",
  "definition": "made ready in advance for a particular purpose",
  "level": "general",
  "starred": false
 },
 {
  "id": 984,
  "word": "Resisted",
  "definition": "opposed or refused to accept something",
  "level": "general",
  "starred": false
 },
 {
  "id": 985,
  "word": "Excessive for",
  "definition": "going beyond what is appropriate or reasonable for something",
  "level": "general",
  "starred": false
 },
 {
  "id": 986,
  "word": "Indispensable to",
  "definition": "absolutely necessary or essential for something",
  "level": "general",
  "starred": false
 },
 {
  "id": 987,
  "word": "Dependent on",
  "definition": "relying on something or someone for support or functioning",
  "level": "general",
  "starred": false
 },
 {
  "id": 988,
  "word": "Controversial among",
  "definition": "causing disagreement or debate within a group",
  "level": "general",
  "starred": false
 },
 {
  "id": 989,
  "word": "Estimate",
  "definition": "to roughly calculate or judge the value or extent of something",
  "level": "general",
  "starred": false
 },
 {
  "id": 990,
  "word": "Serendipitous",
  "definition": "occurring by happy and unexpected chance",
  "level": "general",
  "starred": false
 },
 {
  "id": 991,
  "word": "Resolute",
  "definition": "firmly determined and unwavering",
  "level": "general",
  "starred": false
 },
 {
  "id": 992,
  "word": "Analogy",
  "definition": "a comparison between two things to clarify or explain",
  "level": "general",
  "starred": false
 },
 {
  "id": 993,
  "word": "Trade-off",
  "definition": "a compromise between two desirable but incompatible things",
  "level": "general",
  "starred": false
 },
 {
  "id": 994,
  "word": "Interaction",
  "definition": "reciprocal action or influence between two or more things",
  "level": "general",
  "starred": false
 },
 {
  "id": 995,
  "word": "Symmetrical",
  "definition": "having exactly similar parts on opposite sides; balanced",
  "level": "general",
  "starred": false
 },
 {
  "id": 996,
  "word": "Iterative",
  "definition": "involving repeated cycles or steps moving toward a result",
  "level": "general",
  "starred": false
 },
 {
  "id": 997,
  "word": "Anachronistic",
  "definition": "out of place in time; belonging to a different era",
  "level": "general",
  "starred": false
 },
 {
  "id": 998,
  "word": "Discontinuous",
  "definition": "having breaks or gaps; not continuous",
  "level": "general",
  "starred": false
 },
 {
  "id": 999,
  "word": "Peripheral",
  "definition": "Not central or essential; situated on the edge",
  "level": "general",
  "starred": false
 },
 {
  "id": 1000,
  "word": "Milieu",
  "definition": "social or cultural environment of the person",
  "level": "general",
  "starred": false
 },
 {
  "id": 1001,
  "word": "Adhere",
  "definition": "To believe in and follow the practices of.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1002,
  "word": "Advocate",
  "definition": "To publicly support or recommend.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1003,
  "word": "Allude",
  "definition": "To suggest or call attention to.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1004,
  "word": "Anecdote",
  "definition": "A short amusing or interesting story about a real incident or person.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1005,
  "word": "Apprehensive",
  "definition": "Anxious or fearful that something bad or unpleasant will happen.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1006,
  "word": "Arbitrary",
  "definition": "Based on random choice or personal whim, rather than any reason or system.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1007,
  "word": "Lineage",
  "definition": "Of descent from an ancestor.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1008,
  "word": "Assert",
  "definition": "To state a fact or belief confidently or forcefully.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1009,
  "word": "Bias",
  "definition": "Prejudice in favor of or against one thing, group, or person compared with another.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1010,
  "word": "Concede",
  "definition": "To admit that something is true or valid aser first denying or resisting it.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1011,
  "word": "Coarseness",
  "definition": "The quality of being rough or harsh.",
  "level": "medium",
  "starred": true
 },
 {
  "id": 1012,
  "word": "Eloquent",
  "definition": "Fluent or persuasive in speaking or writing.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1013,
  "word": "Exert",
  "definition": "To make a physical or mental effort.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1014,
  "word": "Skeptical",
  "definition": "Not easily convinced; having doubts or reservations.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1015,
  "word": "Repression",
  "definition": "The restraint, prevention, or inhibition of a feeling or quality.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1016,
  "word": "Speculate",
  "definition": "To form a theory or conjecture about a subject without firm evidence.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1017,
  "word": "Retain",
  "definition": "To continue to have; keep possession of.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1018,
  "word": "Degrade",
  "definition": "To treat or regard someone with contempt or disrespect.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1019,
  "word": "Divergent",
  "definition": "Tending to be different or develop in different directions.",
  "level": "medium",
  "starred": true
 },
 {
  "id": 1020,
  "word": "Explicit",
  "definition": "Stated clearly and in detail, leaving no room for confusion or doubt.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1021,
  "word": "Imminent",
  "definition": "About to happen.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1022,
  "word": "Prominent",
  "definition": "Important; famous.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1023,
  "word": "Reciprocate",
  "definition": "To respond to a gesture or action by making a corresponding one.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1024,
  "word": "Oppressive",
  "definition": "Unjustly inflicting hardship and constraint.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1025,
  "word": "Detractor",
  "definition": "A person who tries to take away from the quality, value or reputation of something or someone.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1026,
  "word": "Dispersed",
  "definition": "Spread widely.",
  "level": "medium",
  "starred": true
 },
 {
  "id": 1027,
  "word": "Catalyze",
  "definition": "To bring about a chemical reaction; to bring about or inspire.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1028,
  "word": "Ecology",
  "definition": "Study of the natural world.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1029,
  "word": "Entomology",
  "definition": "Study of insects.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1030,
  "word": "Genetics",
  "definition": "Study of genes.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1031,
  "word": "Ornithology",
  "definition": "Study of birds.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1032,
  "word": "Paleontology",
  "definition": "Study of fossils.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1033,
  "word": "Zoology",
  "definition": "Study of animals.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1034,
  "word": "Astronomy",
  "definition": "Study of stars and planets.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1035,
  "word": "Botany",
  "definition": "Study of plants.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1036,
  "word": "Neuroscience",
  "definition": "Science of the brain.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1037,
  "word": "Geology",
  "definition": "Study of rocks.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1038,
  "word": "Anthropology",
  "definition": "Study of human behavior and social organization.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1039,
  "word": "Archaeology",
  "definition": "Study of historical human activity through the excavation of physical objects.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1040,
  "word": "Economics",
  "definition": "Study of monetary systems.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1041,
  "word": "Ethnography",
  "definition": "Study of individual cultures.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1042,
  "word": "Folklore",
  "definition": "Study of traditional stories and myths.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1043,
  "word": "Sociology",
  "definition": "Study of everyday human social behaviors and interactions.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1044,
  "word": "Empirical",
  "definition": "Relying on hard data.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1045,
  "word": "Hierarchy",
  "definition": "System of rank.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1046,
  "word": "Indigenous",
  "definition": "Native.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1047,
  "word": "Inhibit",
  "definition": "Prevent or impede.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1048,
  "word": "Pigment",
  "definition": "Color.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1049,
  "word": "Predisposed",
  "definition": "Having a tendency toward.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1050,
  "word": "Regenerate",
  "definition": "Regrow.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1051,
  "word": "Stimulus",
  "definition": "Something that provokes a specific response.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1052,
  "word": "Indulgent",
  "definition": "Having or indicating a tendency to be overly generous.",
  "level": "medium",
  "starred": true
 },
 {
  "id": 1053,
  "word": "Oblivious",
  "definition": "Unaware.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1054,
  "word": "Absolve",
  "definition": "To clear of wrongdoing; pardon.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1055,
  "word": "Chastise",
  "definition": "To criticize severely.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1056,
  "word": "Adversary",
  "definition": "Opponent.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1057,
  "word": "Align",
  "definition": "To support or adopt the position.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1058,
  "word": "Comprehensive",
  "definition": "Complete.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1059,
  "word": "Contingent",
  "definition": "Dependent upon.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1060,
  "word": "Rudimentary",
  "definition": "Very basic.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1061,
  "word": "Badger",
  "definition": "To pester or annoy.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1062,
  "word": "Adverse",
  "definition": "Unfavorable, unlucky, harmful.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1063,
  "word": "Ominous",
  "definition": "Menacing, threatening.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1064,
  "word": "Perpetuate",
  "definition": "To continue; to keep from dying out.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1065,
  "word": "Depict",
  "definition": "To draw or portray.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1066,
  "word": "Exacerbate",
  "definition": "To make worse; to aggravate.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1067,
  "word": "Foreboding",
  "definition": "An ominous foretelling.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1068,
  "word": "Aversion",
  "definition": "Intense dislike; revulsion.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1069,
  "word": "Sedentary",
  "definition": "Passive or inactive.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1070,
  "word": "Opulent",
  "definition": "Extremely wealthy; extravagant.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1071,
  "word": "Livid",
  "definition": "Extremely angry.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1072,
  "word": "Callous",
  "definition": "Insensitive.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1073,
  "word": "Inherent",
  "definition": "Inborn or naturally occurring in something.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1074,
  "word": "Marginal",
  "definition": "Unimportant.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1075,
  "word": "Debilitate",
  "definition": "To make weak or feeble.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1076,
  "word": "Debase",
  "definition": "To lower in value.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1077,
  "word": "Alleviate",
  "definition": "To relieve or make more bearable.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1078,
  "word": "Diligent",
  "definition": "Characterized by steady, earnest, and energetic application.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1079,
  "word": "Pedestrian",
  "definition": "Dull, ordinary.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1080,
  "word": "Malignant",
  "definition": "Causing harm.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1081,
  "word": "Flaunt",
  "definition": "To display or show off.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1082,
  "word": "Desolate",
  "definition": "Depress; bleak; lifeless.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1083,
  "word": "Debunk",
  "definition": "To prove false.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1084,
  "word": "Ideology",
  "definition": "Belief system.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1085,
  "word": "Disposition",
  "definition": "Personality.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1086,
  "word": "Accolade",
  "definition": "Praise; distinction.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1087,
  "word": "Obliterate",
  "definition": "To completely destroy.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1088,
  "word": "Unobtrusive",
  "definition": "Not conspicuous or attracting attention.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1089,
  "word": "Evoke",
  "definition": "To bring or recall to the conscious mind.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1090,
  "word": "Contempt",
  "definition": "The feeling that a person or thing is beneath consideration, worthless, or deserving scorn.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1091,
  "word": "Deference",
  "definition": "Humble submission and respect.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1092,
  "word": "Hinder",
  "definition": "Create difficulties for someone or something, resulting in delay or obstruction.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1093,
  "word": "Invoke",
  "definition": "To cite or appeal to someone or something as an authority for an action or in support of an argument.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1094,
  "word": "Dormant",
  "definition": "Having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1095,
  "word": "Disseminate",
  "definition": "To scatter or spread widely.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1096,
  "word": "Eclipse",
  "definition": "To make less outstanding or important by comparison.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1097,
  "word": "Uncanny",
  "definition": "Strange or mysterious, especially in an unsettling way.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1098,
  "word": "Placate",
  "definition": "To make someone less angry or hostile.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1099,
  "word": "Insidious",
  "definition": "Treacherous, spreading harm stealthily.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1100,
  "word": "Calamitous",
  "definition": "Disastrous.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1101,
  "word": "Fickle",
  "definition": "Erratic.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1102,
  "word": "Prevail",
  "definition": "To win.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1103,
  "word": "Prevailing",
  "definition": "Widespread; generally accepted.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1104,
  "word": "Antithesis",
  "definition": "The direct opposite.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1105,
  "word": "Autonomous",
  "definition": "Acting independently.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1106,
  "word": "Decry",
  "definition": "To denounce; discredit.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1107,
  "word": "Defame",
  "definition": "To libel or slander; to ruin the good name of someone.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1108,
  "word": "Feign",
  "definition": "To represent falsely; to fake.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1109,
  "word": "Deplorable",
  "definition": "Regrettable.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1110,
  "word": "Disparate",
  "definition": "Different; incompatible.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1111,
  "word": "Magnanimous",
  "definition": "Forgiving; generous.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1112,
  "word": "Harrowing",
  "definition": "Frightening or traumatic.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1113,
  "word": "Posthumous",
  "definition": "Occurring aser ones death.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1114,
  "word": "Propensity",
  "definition": "A tendency towards something.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1115,
  "word": "Supple",
  "definition": "Flexible.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1116,
  "word": "Replete",
  "definition": "Completely filled.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1117,
  "word": "Prolific",
  "definition": "Very productive.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1118,
  "word": "Culpable",
  "definition": "Deserving of blame.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1119,
  "word": "Deride",
  "definition": "To ridicule or mock.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1120,
  "word": "Overt",
  "definition": "Not hidden; obvious.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1121,
  "word": "Miser",
  "definition": "A stingy person.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1122,
  "word": "Ornate",
  "definition": "Elaborately or heavily decorated.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1123,
  "word": "Introspective",
  "definition": "Mediative, thoughzul.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1124,
  "word": "Credulity",
  "definition": "Gullibility, a tendency to be too ready to believe something.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1125,
  "word": "Amicable",
  "definition": "Agreeable.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1126,
  "word": "Discordant",
  "definition": "Conflicting; disagreeable in sound.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1127,
  "word": "Epitome",
  "definition": "A perfect example.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1128,
  "word": "Taczul",
  "definition": "Sensitive in dealing with others.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1129,
  "word": "Paltry",
  "definition": "Lacking in importance; trivial.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1130,
  "word": "Elucidate",
  "definition": "To explain or clarify.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1131,
  "word": "Eclectic",
  "definition": "Gettng ideas from a diverse range of sources.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1132,
  "word": "Malleable",
  "definition": "Capable of being shaped or formed.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1133,
  "word": "Candor",
  "definition": "Honesty.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1134,
  "word": "Recurrent",
  "definition": "Occurring repeatedly or at regular intervals.",
  "level": "hard",
  "starred": true
 },
 {
  "id": 1135,
  "word": "Inadvertent",
  "definition": "Unintentional.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1136,
  "word": "Incisive",
  "definition": "Sharpness of mind.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1137,
  "word": "Ascertain",
  "definition": "To determine or discover.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1138,
  "word": "Coherent",
  "definition": "Logically connected.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1139,
  "word": "Inundate",
  "definition": "To overwhelm; to flood.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1140,
  "word": "Accrue",
  "definition": "To increase or to gain.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1141,
  "word": "Hamper",
  "definition": "To prevent the free movement or action of.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1142,
  "word": "Animosity",
  "definition": "Hatred or bitter hostility.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1143,
  "word": "Deleterious",
  "definition": "Harmful to one’s health.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1144,
  "word": "Judicious",
  "definition": "Showing sound judgement.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1145,
  "word": "Acumen",
  "definition": "Sharpness of judgement or insight.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1146,
  "word": "Audacious",
  "definition": "Bold; fearless.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1147,
  "word": "Nefarious",
  "definition": "Extremely wicked.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1148,
  "word": "Brevity",
  "definition": "Concise expression without wasted words.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1149,
  "word": "Notoriety",
  "definition": "Being famous or well known.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1150,
  "word": "Homogenous",
  "definition": "Having the same characteristics throughout.",
  "level": "hard",
  "starred": true
 },
 {
  "id": 1151,
  "word": "Depreciate",
  "definition": "To devalue.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1152,
  "word": "Derelict",
  "definition": "Abandoned, negleczul of duty.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1153,
  "word": "Censure",
  "definition": "Blame or condemn.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1154,
  "word": "Complacent",
  "definition": "Self-satisfied; indifferent; accepting of mediocrity.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1155,
  "word": "Indisputable",
  "definition": "Impossible to question or doubt.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1156,
  "word": "Fortuitous",
  "definition": "Accidental or by chance.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1157,
  "word": "Hiatus",
  "definition": "A pause or lapse.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1158,
  "word": "Verbose",
  "definition": "Wordy.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1159,
  "word": "Assail",
  "definition": "To attack someone.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1160,
  "word": "Fathom",
  "definition": "To understand.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1161,
  "word": "Accost",
  "definition": "To approach and speak to someone.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1162,
  "word": "Acuity",
  "definition": "Insight; sharpness.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1163,
  "word": "Deferential",
  "definition": "Yielding to the opinion or wishes of another.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1164,
  "word": "Aberration",
  "definition": "A deviation from the normal or proper.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1165,
  "word": "Proscribe",
  "definition": "To forbid.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1166,
  "word": "Disconcerting",
  "definition": "Confusing; unsettling.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1167,
  "word": "Atrophy",
  "definition": "To deteriorate.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1168,
  "word": "Laud",
  "definition": "To praise highly.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1169,
  "word": "Dissonant",
  "definition": "Harsh or irregular in sound.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1170,
  "word": "Abet",
  "definition": "To aid; act as an accomplice.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1171,
  "word": "Abhor",
  "definition": "To detest or loathe.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1172,
  "word": "Verisimilitude",
  "definition": "The appearance of being true or real.",
  "level": "expert",
  "starred": true
 },
 {
  "id": 1173,
  "word": "Tertiary",
  "definition": "Of the third order, rank, stage, formation; less important.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1174,
  "word": "Citadel",
  "definition": "A stronghold or fortress.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1175,
  "word": "Repine",
  "definition": "To feel or express discontent.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1176,
  "word": "Demagogue",
  "definition": "A person who appeals to the emotions or prejudices of the people.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1177,
  "word": "Neophyte",
  "definition": "A beginner or novice.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1178,
  "word": "Cogent",
  "definition": "Persuasive or forceful.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1179,
  "word": "Laconic",
  "definition": "Using few words.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1180,
  "word": "Mirth",
  "definition": "Merriment, joy.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1181,
  "word": "Demur",
  "definition": "To object.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1182,
  "word": "Equivocate",
  "definition": "To be ambiguous, not upfront.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1183,
  "word": "Altruistic",
  "definition": "Selflessness; unselfish concern for the welfare of others.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1184,
  "word": "Fastidious",
  "definition": "Very attentive to detail.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1185,
  "word": "Adulation",
  "definition": "High praise.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1186,
  "word": "Guile",
  "definition": "Deception or skillful deceit.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1187,
  "word": "Prodigious",
  "definition": "Causing amazement or wonder; enormous.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1188,
  "word": "Hedonism",
  "definition": "The pursuit of pleasure.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1189,
  "word": "Demure",
  "definition": "Modest and reserved, falsely so.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1190,
  "word": "Terse",
  "definition": "Brief.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1191,
  "word": "Clamor",
  "definition": "Noise, a mixture of disagreeable sounds.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1192,
  "word": "Colloquial",
  "definition": "Informal.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1193,
  "word": "Acquiesce",
  "definition": "To agree; submit passively.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1194,
  "word": "Loquacious",
  "definition": "Talkative.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1195,
  "word": "Curt",
  "definition": "Short in response, commonly used when someone is being rude.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1196,
  "word": "Rancor",
  "definition": "Bitterness; spitefulness.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1197,
  "word": "Belligerent",
  "definition": "Aggressive; hostile.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1198,
  "word": "Contrite",
  "definition": "Affected by guilt.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1199,
  "word": "Omniscient",
  "definition": "All knowing.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1200,
  "word": "Decorous",
  "definition": "Marked by good behavior.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1201,
  "word": "Pertinent",
  "definition": "Relevant.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1202,
  "word": "Allay",
  "definition": "To lessen, ease, or soothe.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1203,
  "word": "Bilk",
  "definition": "To swindle or cheat.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1204,
  "word": "Egregious",
  "definition": "Obviously bad or offensive.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1205,
  "word": "Antipathy",
  "definition": "Extreme dislike.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1206,
  "word": "Acrimony",
  "definition": "Bitterness or hostility.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1207,
  "word": "Fervent",
  "definition": "Passionate or zealous.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1208,
  "word": "Dubious",
  "definition": "Doubzul.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1209,
  "word": "Curmudgeon",
  "definition": "A rude person.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1210,
  "word": "Convivial",
  "definition": "Sociable; festive.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1211,
  "word": "Extol",
  "definition": "To commend or praise.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1212,
  "word": "Admonish",
  "definition": "To caution or reprimand; to warn.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1213,
  "word": "Capricious",
  "definition": "Impulsive; whimsical.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1214,
  "word": "Accretion",
  "definition": "Gradual build up or growth by addition.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1215,
  "word": "Inviolable",
  "definition": "Not to be broken; sacred.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1216,
  "word": "Assent",
  "definition": "To agree.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1217,
  "word": "Taciturn",
  "definition": "Reserved or quiet.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1218,
  "word": "Trite",
  "definition": "Overused, commonplace, having no freshness or appeal.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1219,
  "word": "Hew",
  "definition": "To cut or shape.",
  "level": "expert",
  "starred": true
 },
 {
  "id": 1220,
  "word": "Profligate",
  "definition": "Wasteful.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1221,
  "word": "Castigate",
  "definition": "To punish severely.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1222,
  "word": "Brusque",
  "definition": "Rudely concise.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1223,
  "word": "Secular",
  "definition": "Worldly, not spiritual.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1224,
  "word": "Pious",
  "definition": "Very observant of religious practices.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1225,
  "word": "Amenable",
  "definition": "Agreeable or cooperative.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1226,
  "word": "Furtive",
  "definition": "Sneaky or sly.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1227,
  "word": "Edify",
  "definition": "To instruct or enlighten.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1228,
  "word": "Assiduous",
  "definition": "Diligent; hard working.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1229,
  "word": "Heretic",
  "definition": "A person holding untraditional or blasphemous opinions.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1230,
  "word": "Incorrigible",
  "definition": "Incapable of being corrected or reformed.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1231,
  "word": "Auspicious",
  "definition": "Favorable; promising.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1232,
  "word": "Avarice",
  "definition": "Greed.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1233,
  "word": "Egalitarian",
  "definition": "Equal for all.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1234,
  "word": "Circumspect",
  "definition": "Careful to consider all circumstances and consequences.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1235,
  "word": "Byzantine",
  "definition": "Very complicated or intricate.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1236,
  "word": "Feckless",
  "definition": "Weak; ineffective; incompetent.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1237,
  "word": "Ardent",
  "definition": "Passionate.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1238,
  "word": "Expedient",
  "definition": "Suitable for achieving a particular end.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1239,
  "word": "Ascetic",
  "definition": "Self-denying; depriving oneself of something.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1240,
  "word": "Onerous",
  "definition": "Burdensome or oppressive.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1241,
  "word": "Sagacious",
  "definition": "Wise.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1242,
  "word": "Indelible",
  "definition": "Making marks or an impression that cannot be removed or lost.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1243,
  "word": "Aspersion",
  "definition": "A false rumor or damaging report.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1244,
  "word": "Innocuous",
  "definition": "Harmless.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1245,
  "word": "Impious",
  "definition": "Irreverent; disrespeczul.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1246,
  "word": "Perspicacious",
  "definition": "Very perceptive or discerning.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1247,
  "word": "Abstruse",
  "definition": "Complex; hard to understand.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1248,
  "word": "Petulant",
  "definition": "Childish; irritable.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1249,
  "word": "Abase",
  "definition": "To humble or degrade.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1250,
  "word": "Latent",
  "definition": "Undeveloped or dormant.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1251,
  "word": "Abdicate",
  "definition": "To formally relinquish.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1252,
  "word": "Obstreperous",
  "definition": "Noisy; unruly.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1253,
  "word": "Beguile",
  "definition": "To deceive.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1254,
  "word": "Irreverent",
  "definition": "Lacking respect.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1255,
  "word": "Parity",
  "definition": "State of being equivalent.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1256,
  "word": "Callow",
  "definition": "Inexperienced; immature.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1257,
  "word": "Enigma",
  "definition": "Something or someone puzzling or hard to understand.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1258,
  "word": "Amiable",
  "definition": "Friendly and good.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1259,
  "word": "Eminent",
  "definition": "Prominent; distinguished.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1260,
  "word": "Pragmatic",
  "definition": "Practical.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1261,
  "word": "Iconoclast",
  "definition": "One who attacks traditional ideas or institutions.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1262,
  "word": "Penitent",
  "definition": "Remorseful.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1263,
  "word": "Magnate",
  "definition": "A powerful or influential person.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1264,
  "word": "Gregarious",
  "definition": "Sociable; enjoying the company of others.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1265,
  "word": "Languid",
  "definition": "Exhausted.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1266,
  "word": "Affable",
  "definition": "Friendly.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1267,
  "word": "Hapless",
  "definition": "Ill fated; unlucky.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1268,
  "word": "Palliate",
  "definition": "To soothe or mitigate.",
  "level": "expert",
  "starred": false
 },
 {
  "id": 1269,
  "word": "Abandon",
  "definition": "Leave behind; give up.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1270,
  "word": "Abject",
  "definition": "Miserable; degraded.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1271,
  "word": "Abjure",
  "definition": "Renounce formally.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1272,
  "word": "Abnegation",
  "definition": "Self-denial.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1273,
  "word": "Abrogate",
  "definition": "Repeal; cancel.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1274,
  "word": "Abscond",
  "definition": "Flee secretly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1275,
  "word": "Abysmal",
  "definition": "Extremely bad.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1276,
  "word": "Accede",
  "definition": "Agree; assume office.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1277,
  "word": "Acerbic",
  "definition": "Sharp and bitter in tone.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1278,
  "word": "Acrid",
  "definition": "Harsh; irritating.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1279,
  "word": "Adamant",
  "definition": "Unyielding.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1280,
  "word": "Alacrity",
  "definition": "Eager readiness.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1281,
  "word": "Ambivalence",
  "definition": "Mixed feelings.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1282,
  "word": "Anachronism",
  "definition": "Something out of its time.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1283,
  "word": "Anodyne",
  "definition": "Soothing; harmless.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1284,
  "word": "Apocryphal",
  "definition": "Of doubtful authenticity.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1285,
  "word": "Apt",
  "definition": "Suitable; likely.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1286,
  "word": "Bane",
  "definition": "Cause of distress.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1287,
  "word": "Bear",
  "definition": "Carry; endure.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1288,
  "word": "Berate",
  "definition": "Scold harshly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1289,
  "word": "Bereft",
  "definition": "Deprived.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1290,
  "word": "Blandishment",
  "definition": "Flattery used to persuade.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1291,
  "word": "Bombastic",
  "definition": "Pompous.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1292,
  "word": "Bucolic",
  "definition": "Rural; pastoral.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1293,
  "word": "Buckle",
  "definition": "Bend; collapse.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1294,
  "word": "Burgeon",
  "definition": "Grow rapidly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1295,
  "word": "Cacophony",
  "definition": "Harsh noise.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1296,
  "word": "Cajole",
  "definition": "Persuade through flattery.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1297,
  "word": "Calumniate",
  "definition": "Slander.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1298,
  "word": "Calumny",
  "definition": "False accusation.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1299,
  "word": "Carp",
  "definition": "Complain.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1300,
  "word": "Censorious",
  "definition": "Highly critical.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1301,
  "word": "Chagrin",
  "definition": "Embarrassment.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1302,
  "word": "Check",
  "definition": "Restrain; stop.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1303,
  "word": "Chicanery",
  "definition": "Trickery.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1304,
  "word": "Circumlocution",
  "definition": "Indirect speech.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1305,
  "word": "Circumscribe",
  "definition": "Limit.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1306,
  "word": "Cleave",
  "definition": "Split or adhere.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1307,
  "word": "Cognizant",
  "definition": "Aware.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1308,
  "word": "Color",
  "definition": "Influence; bias.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1309,
  "word": "Commensurate",
  "definition": "Proportional.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1310,
  "word": "Compunction",
  "definition": "Remorse.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1311,
  "word": "Concomitant",
  "definition": "Accompanying.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1312,
  "word": "Conducive",
  "definition": "Helpful.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1313,
  "word": "Conflagration",
  "definition": "Large fire.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1314,
  "word": "Connive",
  "definition": "Secretly cooperate.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1315,
  "word": "Consign",
  "definition": "Assign; deliver.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1316,
  "word": "Constituent",
  "definition": "Component part.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1317,
  "word": "Construe",
  "definition": "Interpret.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1318,
  "word": "Contend",
  "definition": "Argue.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1319,
  "word": "Contravene",
  "definition": "Violate.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1320,
  "word": "Contumacious",
  "definition": "Stubbornly disobedient.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1321,
  "word": "Conversely",
  "definition": "On the other hand.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1322,
  "word": "Covet",
  "definition": "Desire greatly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1323,
  "word": "Credulous",
  "definition": "Gullible.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1324,
  "word": "Cupidity",
  "definition": "Greed.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1325,
  "word": "Currency",
  "definition": "General acceptance; money.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1326,
  "word": "Daunting",
  "definition": "Intimidating.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1327,
  "word": "Decorum",
  "definition": "Proper behavior.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1328,
  "word": "Deprecate",
  "definition": "Express disapproval.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1329,
  "word": "Deterrent",
  "definition": "Discouraging factor.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1330,
  "word": "Devious",
  "definition": "Dishonest; indirect.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1331,
  "word": "Didactic",
  "definition": "Intended to teach.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1332,
  "word": "Diffident",
  "definition": "Shy; lacking confidence.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1333,
  "word": "Digress",
  "definition": "Stray from topic.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1334,
  "word": "Dilettante",
  "definition": "Amateur enthusiast.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1335,
  "word": "Disdain",
  "definition": "Contempt.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1336,
  "word": "Disinterested",
  "definition": "Impartial.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1337,
  "word": "Dismiss",
  "definition": "Reject.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1338,
  "word": "Dissemble",
  "definition": "Conceal true motives.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1339,
  "word": "Duplicitous",
  "definition": "Deceitful.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1340,
  "word": "Ebullient",
  "definition": "Enthusiastic.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1341,
  "word": "Economy",
  "definition": "Thrift; efficiency.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1342,
  "word": "Efficacious",
  "definition": "Effective.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1343,
  "word": "Encomium",
  "definition": "Formal praise.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1344,
  "word": "Endemic",
  "definition": "Native to a region.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1345,
  "word": "Enervate",
  "definition": "Weaken.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1346,
  "word": "Ephemeral",
  "definition": "Short-lived.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1347,
  "word": "Equanimity",
  "definition": "Calmness.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1348,
  "word": "Erudite",
  "definition": "Scholarly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1349,
  "word": "Erstwhile",
  "definition": "Former.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1350,
  "word": "Exacting",
  "definition": "Demanding.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1351,
  "word": "Exonerate",
  "definition": "Clear from blame.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1352,
  "word": "Extraneous",
  "definition": "Irrelevant.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1353,
  "word": "Facilitate",
  "definition": "Make easier.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1354,
  "word": "Fallacious",
  "definition": "Misleading.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1355,
  "word": "Fecund",
  "definition": "Fertile; productive.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1356,
  "word": "Flagrant",
  "definition": "Glaringly offensive.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1357,
  "word": "Forthright",
  "definition": "Direct and honest.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1358,
  "word": "Frugal",
  "definition": "Economical.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1359,
  "word": "Garrulous",
  "definition": "Talkative.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1360,
  "word": "Hackneyed",
  "definition": "Overused.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1361,
  "word": "Hitherto",
  "definition": "Until now.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1362,
  "word": "Hypocritical",
  "definition": "Insincere.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1363,
  "word": "Inasmuch",
  "definition": "Since; because.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1364,
  "word": "Indifferent",
  "definition": "Unconcerned.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1365,
  "word": "Indignant",
  "definition": "Angry at unfairness.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1366,
  "word": "Indolent",
  "definition": "Lazy.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1367,
  "word": "Ineffable",
  "definition": "Beyond words.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1368,
  "word": "Infamous",
  "definition": "Notorious for bad reasons.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1369,
  "word": "Inform",
  "definition": "Give shape to; tell.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1370,
  "word": "Ingenuous",
  "definition": "Sincere; innocent.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1371,
  "word": "Inimical",
  "definition": "Hostile.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1372,
  "word": "Insofar",
  "definition": "To the extent that.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1373,
  "word": "Intractable",
  "definition": "Difficult to control.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1374,
  "word": "Intransigent",
  "definition": "Unwilling to compromise.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1375,
  "word": "Inured",
  "definition": "Accustomed to hardship.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1376,
  "word": "Inveterate",
  "definition": "Habitual.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1377,
  "word": "Invidious",
  "definition": "Offensive; unfairly discriminatory.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1378,
  "word": "Impunity",
  "definition": "Freedom from punishment.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1379,
  "word": "Incongruent",
  "definition": "Inconsistent.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1380,
  "word": "Lachrymose",
  "definition": "Tearful.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1381,
  "word": "Lassitude",
  "definition": "Weariness.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1382,
  "word": "Lax",
  "definition": "Careless.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1383,
  "word": "Lethargic",
  "definition": "Sluggish.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1384,
  "word": "Let",
  "definition": "Allow.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1385,
  "word": "Limn",
  "definition": "Depict; describe.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1386,
  "word": "Listless",
  "definition": "Lacking energy.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1387,
  "word": "Lucid",
  "definition": "Clear.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1388,
  "word": "Malevolent",
  "definition": "Evil-intentioned.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1389,
  "word": "Malicious",
  "definition": "Deliberately harmful.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1390,
  "word": "Mark",
  "definition": "Indicate.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1391,
  "word": "Mendacious",
  "definition": "Dishonest.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1392,
  "word": "Meretricious",
  "definition": "Superficially attractive.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1393,
  "word": "Mundane",
  "definition": "Ordinary.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1394,
  "word": "Negligent",
  "definition": "Careless.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1395,
  "word": "Nevertheless",
  "definition": "Despite that.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1396,
  "word": "Notorious",
  "definition": "Widely known, often negatively.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1397,
  "word": "Notwithstanding",
  "definition": "Despite.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1398,
  "word": "Nugatory",
  "definition": "Worthless.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1399,
  "word": "Obdurate",
  "definition": "Stubborn.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1400,
  "word": "Obsequious",
  "definition": "Overly submissive.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1401,
  "word": "Obstinate",
  "definition": "Stubborn.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1402,
  "word": "Occlude",
  "definition": "Block.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1403,
  "word": "Opprobrium",
  "definition": "Disgrace.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1404,
  "word": "Ostensibly",
  "definition": "Apparently.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1405,
  "word": "Ostentatious",
  "definition": "Showy.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1406,
  "word": "Parsimonious",
  "definition": "Stingy.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1407,
  "word": "Patronize",
  "definition": "Treat condescendingly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1408,
  "word": "Pellucid",
  "definition": "Very clear.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1409,
  "word": "Perfidious",
  "definition": "Treacherous.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1410,
  "word": "Pernicious",
  "definition": "Harmful.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1411,
  "word": "Phlegmatic",
  "definition": "Calm; unemotional.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1412,
  "word": "Plastic",
  "definition": "Adaptable.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1413,
  "word": "Plausible",
  "definition": "Believable.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1414,
  "word": "Pompous",
  "definition": "Self-important.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1415,
  "word": "Precipitate",
  "definition": "Rash; cause suddenly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1416,
  "word": "Precede",
  "definition": "Come before.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1417,
  "word": "Probity",
  "definition": "Integrity.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1418,
  "word": "Procrastinate",
  "definition": "Delay.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1419,
  "word": "Prodigal",
  "definition": "Wastefully extravagant.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1420,
  "word": "Propitious",
  "definition": "Favorable.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1421,
  "word": "Prudent",
  "definition": "Wise and careful.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1422,
  "word": "Punctilious",
  "definition": "Attentive to details.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1423,
  "word": "Purportedly",
  "definition": "Allegedly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1424,
  "word": "Putative",
  "definition": "Supposed.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1425,
  "word": "Qualify",
  "definition": "Limit; meet requirements.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1426,
  "word": "Querulous",
  "definition": "Complaining.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1427,
  "word": "Quixotic",
  "definition": "Idealistic and impractical.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1428,
  "word": "Recondite",
  "definition": "Obscure.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1429,
  "word": "Reticent",
  "definition": "Reserved.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1430,
  "word": "Restive",
  "definition": "Uneasy; resistant.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1431,
  "word": "Rhetoric",
  "definition": "Persuasive language.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1432,
  "word": "Sacrosanct",
  "definition": "Inviolable.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1433,
  "word": "Sanguinary",
  "definition": "Bloody.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1434,
  "word": "Sardonic",
  "definition": "Mockingly cynical.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1435,
  "word": "Singular",
  "definition": "Unique.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1436,
  "word": "Solicitous",
  "definition": "Concerned.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1437,
  "word": "Specious",
  "definition": "Deceptively plausible.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1438,
  "word": "Stolid",
  "definition": "Unemotional.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1439,
  "word": "Strident",
  "definition": "Harsh and loud.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1440,
  "word": "Stupefy",
  "definition": "Astonish; numb.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1441,
  "word": "Subvert",
  "definition": "Undermine.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1442,
  "word": "Sycophant",
  "definition": "Flatterer seeking favor.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1443,
  "word": "Tangentially",
  "definition": "Indirectly.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1444,
  "word": "Temper",
  "definition": "Moderate.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1445,
  "word": "Tractable",
  "definition": "Manageable.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1446,
  "word": "Transcend",
  "definition": "Go beyond.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1447,
  "word": "Truculent",
  "definition": "Aggressively defiant.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1448,
  "word": "Tendentious",
  "definition": "Biased.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1449,
  "word": "Uninterested",
  "definition": "Impartial.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1450,
  "word": "Vacuous",
  "definition": "Empty; lacking thought.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1451,
  "word": "Vitiate",
  "definition": "Weaken; impair.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1452,
  "word": "Want",
  "definition": "Lack.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1453,
  "word": "Wanting",
  "definition": "Lacking.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1454,
  "word": "Wary",
  "definition": "Cautious.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1455,
  "word": "Zealous",
  "definition": "Enthusiastic.",
  "level": "general",
  "starred": false
 },
 {
  "id": 1456,
  "word": "Abstract",
  "definition": "Existing purely in the mind; not representing actual reality.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1457,
  "word": "Advent",
  "definition": "The arrival or creation of something.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1458,
  "word": "Antagonistic",
  "definition": "Showing hostility or opposition.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1459,
  "word": "Antecedent",
  "definition": "A preceding event or condition.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1460,
  "word": "Apex",
  "definition": "The highest point of something.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1461,
  "word": "Catastrophic",
  "definition": "Disastrous or causing great damage.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1462,
  "word": "Characterization",
  "definition": "The way a character is described.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1463,
  "word": "Commercialization",
  "definition": "The process of making something a business.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1464,
  "word": "Compelling",
  "definition": "Captivating or persuasive.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1465,
  "word": "Comprise",
  "definition": "To consist of or include.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1466,
  "word": "Conceptualize",
  "definition": "To form an idea or concept.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1467,
  "word": "Conflated",
  "definition": "Combined in a misleading way.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1468,
  "word": "Contrived",
  "definition": "Artificial or overly planned.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1469,
  "word": "Corrosive",
  "definition": "Gradually destructive or harmful.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1470,
  "word": "Deviate",
  "definition": "To move away from a set path or norm.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1471,
  "word": "Disorienting",
  "definition": "Causing confusion or loss of direction.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1472,
  "word": "Dominance",
  "definition": "The state of being in control or superior.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1473,
  "word": "Encompass",
  "definition": "To include or surround.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1474,
  "word": "Exemplify",
  "definition": "To serve as a typical example of something.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1475,
  "word": "Fabricate",
  "definition": "To invent or create, often dishonestly.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1476,
  "word": "Grapple",
  "definition": "To struggle or wrestle with something.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1477,
  "word": "Hibernation",
  "definition": "A state of dormancy or deep sleep.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1478,
  "word": "Hypothesize",
  "definition": "To form a theory or assumption.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1479,
  "word": "Impending",
  "definition": "Approaching or about to happen.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1480,
  "word": "Impenetrable",
  "definition": "Impossible to pass through.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1481,
  "word": "Imperceptible",
  "definition": "Very slight or difficult to notice.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1482,
  "word": "Implication",
  "definition": "A possible consequence or meaning.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1483,
  "word": "Improvise",
  "definition": "To create or perform spontaneously.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1484,
  "word": "Inadvertently",
  "definition": "Unintentionally or by accident.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1485,
  "word": "Incite",
  "definition": "To encourage or stir up.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1486,
  "word": "Indifference",
  "definition": "Lack of interest or concern.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1487,
  "word": "Infrequent",
  "definition": "Not occurring often.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1488,
  "word": "Insensible",
  "definition": "Unaware or indifferent.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1489,
  "word": "Intangible",
  "definition": "Not able to be touched or measured.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1490,
  "word": "Intersect",
  "definition": "To cross or meet at a point.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1491,
  "word": "Intricate",
  "definition": "Very detailed or complicated.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1492,
  "word": "Intriguing",
  "definition": "Arousing curiosity or interest.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1493,
  "word": "Invalidate",
  "definition": "To make something void or null.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1494,
  "word": "Neutrality",
  "definition": "The state of not taking sides.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1495,
  "word": "Nuanced",
  "definition": "Having subtle differences.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1496,
  "word": "Obligate",
  "definition": "To compel or require.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1497,
  "word": "Omnipotent",
  "definition": "Almighty and all powerful.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1498,
  "word": "Onset",
  "definition": "The beginning or early stages.",
  "level": "medium",
  "starred": false
 },
 {
  "id": 1499,
  "word": "Ornamental",
  "definition": "Decorative rather than functional.",
  "level": "hard",
  "starred": false
 },
 {
  "id": 1500,
  "word": "Oust",
  "definition": "To remove or force out of a position.",
  "level": "hard",
  "starred": false
 }
];
