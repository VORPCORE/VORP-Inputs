using Newtonsoft.Json;
using System.Runtime.Serialization;

namespace VorpInputs.Models
{
    [DataContract]
    public class InputMessage
    {
        [DataMember(Name = "type")]
        public string Type { get; } = "enableinput";

        [DataMember(Name = "style")]
        public string Style;

        [DataMember(Name = "button")]
        public string ButtonText;

        [DataMember(Name = "placeholder")]
        public string InputPlaceholder;

        [DataMember(Name = "inputType")]
        public string InputType;

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
