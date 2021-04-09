using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FuzyAppRest.Domain.Domain
{
    public class ActionViewModel : BaseDomain
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int ParentId { get; set; }
    }
}
