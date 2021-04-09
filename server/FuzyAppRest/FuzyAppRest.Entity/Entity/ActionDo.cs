using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FuzyAppRest.Entity.Entity
{
    public class ActionDo : BaseEntity
    {
        [Required]
        [StringLength(20)]
        public string Name { get; set; }
        [StringLength(255)]
        public string Description { get; set; }
        public int ParentId { get; set; }
    }
}
