using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Web_PlanA.Controllers
{
    public class WeiXinServiseController : ApiController
    {
        public string TestToken(TokenModel model)
        {
            return model.echostr;
        }
    }

    public class TokenModel
    {
        public string signature { get; set; }
        public string timespan { get; set; }
        public string nonce { get; set; }
        public string echostr { get; set; }
    }
}
