internal class Program
{
    static bool[] Eratosthenes(int n)
    {
        if (n < 2)
        {
            throw new ArgumentOutOfRangeException("n must be > 1");
        }

        bool[] A = new bool[n];
        for(int i = 0; i < n; i++)
        {
            A[i] = true;
        }

        int sqrt_n = (int)Math.Sqrt(n);

        for (int i = 2; i <= sqrt_n; i++)
        {
            if (A[i])
            {
                int k = 1;
                for (int j = i * i; j < n; j = i * i + k++ * i)
                {
                    A[j] = false;
                }
            }
        }

        return A;
    }

    static void Main()
    {
        int n = 1_000_000_000;
        var primes = Eratosthenes(n);
        for (int i = 2; i < primes.Length; i++)
        {
            if (primes[i])
            {
                Console.Write(i + " ");
            }
        }
    }
}