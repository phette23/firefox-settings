/** this default preferences file simply points to
 * an autoconfig located in the same directory as the
 * Firefox executable
**/
pref('general.config.filename', 'settings.cfg');

/**
 * the second parameter is an integer representing
 * how many bytes you want the config file shifted
 * 0 = plain text, readable by anyone who knows where to look
 * 13 is typical for people who want to obscure their settings
 * but you can use any number
 * MDN on byte-shifting: https://developer.mozilla.org/en/Automatic_Mozilla_Configurator/Locked_config_settings
 * I've left this at zero because
 * A) you wouldn't be able to read my settings file if I didn't
 * B) the obfuscation is illusory; anyone can change the setting
 * below if they really want to mess with your defaults
**/
pref('general.config.obscure_value', 0);