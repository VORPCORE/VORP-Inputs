using CitizenFX.Core;
using CitizenFX.Core.Native;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vorpinputs_cl
{
    public class vorpinputs_cl : BaseScript
    {
        static string text = null;

        public vorpinputs_cl()
        {
            API.RegisterCommand("closeinput", new Action(CloseInput), false);

            EventHandlers["vorpinputs:getInput"] += new Action<string, string, dynamic>(getInputs);
            EventHandlers["vorpinputs:getInputsWithInputType"] += new Action<string, string, string, dynamic>(getInputsWithInputType);

            API.RegisterNuiCallbackType("submit");
            EventHandlers["__cfx_nui:submit"] += new Action<ExpandoObject>(SetSubmit);

            API.RegisterNuiCallbackType("close");
            EventHandlers["__cfx_nui:close"] += new Action<ExpandoObject>(SetClose);
        }

        private void SetClose(dynamic result)
        {
            text = result.stringtext;
        }

        private void SetSubmit(dynamic result)
        {
            text = result.stringtext;
        }

        private void getInputs(string title, string placeholder, dynamic cb)
        {
            WaitToInputs(title, placeholder, cb);
        }

        private void getInputsWithInputType(string title, string placeholder, string inputType, dynamic cb) {
            WaitToInputs(title, placeholder, cb, inputType);  
        } 

        public async Task WaitToInputs(string button, string placeholder, dynamic cb, string inputType = "text")
        {
            API.SetNuiFocus(true, true);
            string json = "{\"type\": \"enableinput\",\"style\": \"block\",\"button\": \"" + button + "\",\"placeholder\": \"" + placeholder + "\", \"inputType\": \"" + inputType + "\" }";
            API.SendNuiMessage(json);

            while (text == null)
            {
                await Delay(1);
            }

            cb.Invoke(text);

            await Delay(1);
            text = null;
            CloseInput();
        }

        private void CloseInput()
        {
            API.SetNuiFocus(false, false);

            string json = "{\"type\": \"enableinput\",\"style\": \"none\"}";

            API.SendNuiMessage(json);
        }

    }
}
