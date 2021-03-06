import i18n from 'lib/mixins/i18n'

export const streamLabels = {
	timeline: () => i18n.translate( 'Timeline' ),
	email: () => i18n.translate( 'Email' )
};

export const settingLabels = {
	comment_like: () => i18n.translate( 'Likes on my comments' ),
	comment_reply: () => i18n.translate( 'Replies to your comments' ),

	new_comment: () => i18n.translate( 'New Comment' ),
	post_like: () => i18n.translate( 'Post Likes' ),
	follow: () => i18n.translate( 'Follows' ),
	achievement: () => i18n.translate( 'Achievements' ),
	mentions: () => i18n.translate( 'Mentions' )
};

export const getLabelForStream = stream => stream in streamLabels
	? streamLabels[stream].call()
	: null;

export const getLabelForSetting = setting => setting in settingLabels
	? settingLabels[setting].call()
	: null;
