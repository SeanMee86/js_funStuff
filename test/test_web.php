<html>
  <head>
    <title>GSA Tech Test</title>
    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossorigin="anonymous"></script>
  </head>
  <body>
<?php
  /*
    Part One

    Establish a connection to the following database using PDO or mysqli.

    host: dreamhostdb.greenstreetapps.com
    dbname: gsatechtest_web
    username: gsatechtest_web
    password: gr33nstr33t
  */

$host = 'dreamhostdb.greenstreetapps.com';
$db = 'gsatechtest_web';
$username = 'gsatechtest_web';
$password = 'gr33nstr33t';

try{
    $conn = new PDO("mysql:host=$host;dbname=$db", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    echo '<pre>';
    echo $e->getMessage();
    echo '</pre>';
}

  /*
    Part Two

    Using the `tblCustomer` tables in the gsatechtest_web database, write a query that finds the sum of the conversation minutes for each company in 2015 and returns these fields:
    company ID, company name, priority, total minutes
  */

  $sql = "SELECT com.ID, com.CompanyName, com.Priority, con.minutes 
            FROM tblCustomerCompanies as com 
            LEFT JOIN tblCustomerConversation as con
            ON com.ID = con.companyID 
            WHERE con.minutes IS NOT NULL AND YEAR(con.date) = 2015
            GROUP BY com.ID
            ORDER BY length(com.Priority), com.Priority";

  $stmt = $conn->prepare($sql);
  $stmt->execute();

  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $conn = null;

  /*
    Part Three

    Loop through the results from your query to build a table with the results.
   */

class Conversation {
    private $companyName;
    private $priority;
    private $minutes;

    function __construct($companyName, $priority, $minutes)
    {
        $this->companyName = $companyName;
        $this->priority = $priority;
        $this->minutes = $minutes;
    }

    /**
     * @return mixed
     */
    public function getCompanyName()
    {
        return $this->companyName;
    }

    /**
     * @return mixed
     */
    public function getPriority()
    {
        return $this->priority;
    }

    /**
     * @return mixed
     */
    public function getMinutes()
    {
        return $this->minutes;
    }
}


$table = "<table id='table'>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Priority</th>
              <th>Minutes</th>
            </tr>
          </thead>
          <tbody>";

foreach ($results as $result) {
    $data = new Conversation($result["CompanyName"], $result["Priority"], $result["minutes"]);
    $table .= "<tr class='row-data'>
            <th>".$data->getCompanyName()."</th>
            <th>".$data->getPriority()."</th>
            <th class='minutes'>".$data->getMinutes()."</th>
         </tr>";
}

$table .= "</tbody></table>";

echo $table;

?>
    <!--
      Part Four

      Write some css to change the background color of the odd rows to #eeeeee
    -->

    <style>
        .row-data:nth-child(odd){
            background: #ebebeb;
        }
        .row-data th {
            padding: 5px 15px;
        }
    </style>

    <!--
      Part Five

      Using javascript and/or jQuery, change the minutes in the table to the form "#h #m". For example, 365 minutes would display as "6h 5m".
    -->
    <script type="text/javascript">
        const rows = Array.from(document.getElementsByClassName('row-data'))
        rows.forEach(row => {
            const minutesRef = row.querySelector('.minutes');
            let minutes = parseInt(row.querySelector('.minutes').innerHTML);
            const hours = Math.floor(minutes/60);
            minutes = minutes % 60;
            minutesRef.innerText = `${hours}h ${minutes}m`
        })
    </script>
  </body>
</html>
