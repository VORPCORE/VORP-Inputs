using Newtonsoft.Json;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace VorpInputs.Models
{
    [DataContract]
    public class InputMessage
    {
        [DataMember(Name = "type")]
        public string Type = "enableinput";

        [DataMember(Name = "style")]
        public string Style;

        [DataMember(Name = "button")]
        public string ButtonText;

        [DataMember(Name = "placeholder")]
        public string InputPlaceholder;

        [DataMember(Name = "inputType")]
        public string InputType;

        [DataMember(Name = "attributes")]
        public Dictionary<string, string> Attributes = new();

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
