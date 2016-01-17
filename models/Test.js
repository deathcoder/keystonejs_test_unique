var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Sentence Model
 * ==========
 */

var Sentence = new keystone.List('Sentence');

Sentence.add({
	sentence: { type: Types.Text, required: true, initial: "New Sentence", index: true },
	word: { type: Types.Relationship, ref: 'Word', required: true, index: true, unique: true, initial: true },
	source: { type: Types.Text },
	createdAt: { type: Date, default: Date.now }
});


/**
 * Registration
 */
Sentence.register();


/**
 * Word Model
 * ==========
 */
var Word = new keystone.List('Word', {
	map: { name: 'word' },
	_id: { from: 'word', path: 'word', unique: true, fixed: false}
});

Word.add({
	word: { type: Types.Text, required: true, initial: "New word", index: true, unique: true }
});


/**
 * Registration
 */
Word.register();
