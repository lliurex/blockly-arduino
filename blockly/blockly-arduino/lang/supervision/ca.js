'use strict';

goog.provide('Blockly.Msg.ca');

goog.require('Blockly.Msg');

Blockly.Msg.SV_tab1 = "Entrades lògiques";
Blockly.Msg.SV_tab2 = "Sortides lògiques/PWM";
Blockly.Msg.SV_tab3 = "Entrades analògiques";
Blockly.Msg.SV_tab4 = "Escrutini";
Blockly.Msg.SV_tab5 = "Funcions avançades";
Blockly.Msg.SV_tab5_1 = "Sensors/actuadors treballant";
Blockly.Msg.SV_tab5_2 = "Bus i2c";
Blockly.Msg.SV_tab5_3 = "Enquestes HTTP";
Blockly.Msg.SV_tab5_4 = "Informes";
Blockly.Msg.SV_visible_tab4 = "Visualitza";
Blockly.Msg.SV_alert1 = "El vostre navegador és compatible amb les websockets";
Blockly.Msg.SV_alert2 = "El vostre navegador no és compatible amb les websockets";
Blockly.Msg.SV_onOpen = " La supervisió està connectada a la vostra targeta";
Blockly.Msg.SV_onClose = " El servidor sembla tancat i el websocket inaccessible.";
Blockly.Msg.SV_onMessage_analog = "pin analògic desconegut";
Blockly.Msg.SV_onMessage_digital = "pin digital desconegut";
Blockly.Msg.SV_onMessage_i2c = "No hi ha front definit";
Blockly.Msg.SV_NotCon = " Error : connexió a la targeta impossible ! Està llançat el servidor ?";
Blockly.Msg.SV_Con = " Connexió a la targeta establida !";
Blockly.Msg.SV_enabled = "Activa";
Blockly.Msg.SV_disabled = "Desactiva";
Blockly.Msg.SV_pin_e = "pin";
Blockly.Msg.SV_pin_s = "Configura el pin";
Blockly.Msg.SV_low_e = "Activa";
Blockly.Msg.SV_high_e = "Desactiva";
Blockly.Msg.SV_low_s = "desactivat";
Blockly.Msg.SV_high_s = "activat";
Blockly.Msg.SV_PWM = "amb un senyal modulat en PWM~";
Blockly.Msg.SV_get_analog_map = "Llista de ports analògics";
Blockly.Msg.SV_get_capability = "Llista de posibilitats de connexió als pins";
Blockly.Msg.SV_get_firmware = "Versió del firmware a la targeta";
Blockly.Msg.SV_get_protocol = "Versió del protocol de comunicació";
Blockly.Msg.SV_get_pymata = "Versió del servidor PyMata";
Blockly.Msg.SV_get_pin_report = "Obté un informe d'estat sobre el pin :";
Blockly.Msg.SV_get_pin_report_text = "(per obtindre un informe d'estat, seleccioneu primer el número de pin, o bé trieu el camp, i escolliu-lo amb el botó)";
Blockly.Msg.SV_digital_pin = "Pin digital : ";
Blockly.Msg.SV_analog_pin = "Pin analògic A";
Blockly.Msg.SV_read_pin = "Llegeix";
Blockly.Msg.SV_data_latch = "Des de : ";
Blockly.Msg.SV_data_latch1 = " - ";
Blockly.Msg.SV_data_latch2 = "pujant";
Blockly.Msg.SV_data_latch3 = "baixant";
Blockly.Msg.SV_latch_event = "data i hora : ";
Blockly.Msg.SV_latch_digital_pin = "Taula de dades digital tancada";
Blockly.Msg.SV_latch_analog_pin = "Taula de dades analògiques tancada";
Blockly.Msg.SV_data_latchA = "Valor llindar";
Blockly.Msg.SV_servo = "Servomotor";
Blockly.Msg.SV_servo_pin = "Per al servomotor al pin : ";
Blockly.Msg.SV_servo_angle = "fixa un angle en graus de : ";
Blockly.Msg.SV_servo_set = "Envia la ordre";
Blockly.Msg.SV_tone = "Brunzidorr";
Blockly.Msg.SV_tone_pin = "pin :";
Blockly.Msg.SV_tone_freq = "a la freqüència (Hz) :";
Blockly.Msg.SV_tone_dur = "amb una duració (ms) de :";
Blockly.Msg.SV_tone_play = "Reprodueix la nota";
Blockly.Msg.SV_encoder = "Codificador rotatori";
Blockly.Msg.SV_encoder_pinA = "pin A : ";
Blockly.Msg.SV_encoder_pinB = "pin B : ";
Blockly.Msg.SV_encoder_auto = "Activa la lectura continua";
Blockly.Msg.SV_encoder_manual = "Llegeix ara";
Blockly.Msg.SV_sonar = "Telèmetre d'ultrasons";
Blockly.Msg.SV_sonar_trig = "pin 'Trigger' :";
Blockly.Msg.SV_sonar_echo = "pin 'Echo' :";
Blockly.Msg.SV_sonar_auto = "Activa la lectura continua";
Blockly.Msg.SV_sonar_manual = "Llegeix ara";
Blockly.Msg.SV_stepper = "Motor pas a pas";
Blockly.Msg.SV_stepper_pin1 = "pin 1 :";
Blockly.Msg.SV_stepper_pin2 = "pin 2 :";
Blockly.Msg.SV_stepper_pin3 = "pin 3 :";
Blockly.Msg.SV_stepper_pin4 = "pin 4 :";
Blockly.Msg.SV_stepper_steps_rev = "Nombre de passos par revolució (<= 21 bits)";
Blockly.Msg.SV_stepper_motor = "Velocitat de rotació (<=21 bits)";
Blockly.Msg.SV_stepper_steps = "Nombre de passos (<=14 bits)";
Blockly.Msg.SV_stepper_run = "Activa el motor";
Blockly.Msg.SV_HTTP_BT = "Envia (POST) la petició";
Blockly.Msg.SV_i2c_info = "Els valors per defecte són els necessaris per llegir la temperatura del sensor ";
Blockly.Msg.SV_i2c_config = "Configuració I2C (a fer abans de llegir o escriure ! )";
Blockly.Msg.SV_i2c_readButton = "Configura I2C";
Blockly.Msg.SV_i2c_readDelay = "temps de retard en lectura";
Blockly.Msg.SV_i2c_read = "Lectura al bus I2C";
Blockly.Msg.SV_i2c_read_devAddress = "adreça del perifèric";
Blockly.Msg.SV_i2c_read_devRegister = "registre del perifèric";
Blockly.Msg.SV_i2c_read_bytes = "nombre de bytes a llegir";
Blockly.Msg.SV_i2c_read_type = "tipus de lectura";
Blockly.Msg.SV_i2c_readRequest = "Llegeix";
Blockly.Msg.SV_i2c_retrieveButton = "Cerca els darrers valors llegits";
